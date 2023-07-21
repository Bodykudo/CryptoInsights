import { Card, Row, Col, Input, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CurrencryCard from '../components/CurrencyCard';
import Loader from '../components/Loader';

function Cryptocurrencies({ simplified }) {
  // The default count of Cryptocurrencies is 300
  const count = simplified ? 10 : 300;

  // Get the list of Cryptocurrencies
  const { data: cryptosList, isLoading } = useGetCryptosQuery(count);

  // Create a state for all Cryptocurrencies, filtered Cryptocurrencies after searching, and loaded Cryptocurrencies in user browser
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [loadedCryptos, setLoadedCryptos] = useState([]);

  // Create a state for the search field
  const [searchTerm, setSearchTerm] = useState('');

  // Create a state for the infinite loader
  const [hasMore, setHasMore] = useState(true);

  // Once the data is loaded, update the cryotpcurrencies array and start filling the loaded cryptocurrencies array
  useEffect(() => {
    if (!isLoading) {
      setCryptos(cryptosList?.data?.coins);
      const loaded = cryptos?.slice(0, 20);
      setLoadedCryptos(loaded);
    }
  }, [isLoading, cryptos]);

  // Always update the filtered and loaded array list when user searches for a specific cryotpcurrency
  useEffect(() => {
    if (!isLoading) {
      const filteredCryptos = cryptosList?.data?.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCryptos(filteredCryptos);
      setLoadedCryptos(filteredCryptos?.slice(0, 20));
    }
  }, [isLoading, searchTerm]);

  // Load more cryptocurrencies for the inifnie scrolling
  function loadMoreData() {
    setTimeout(() => {
      if (loadedCryptos?.length === filteredCryptos?.length) {
        setHasMore(false);
      } else {
        const i = loadedCryptos?.length;
        const newCryptos = filteredCryptos?.slice(i, i + 10);
        const newArray = loadedCryptos?.concat(newCryptos);
        setLoadedCryptos(newArray);
      }
    }, 1000);
  }

  if (isLoading || !cryptos) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <InfiniteScroll
        dataLength={simplified ? 10 : loadedCryptos?.length}
        next={!simplified && loadMoreData}
        hasMore={!simplified && hasMore}
        loader={
          !simplified && (
            <Spin
              size="large"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '3rem',
              }}
            />
          )
        }
        style={{ overflowX: 'hidden', paddingBottom: '10px' }}
      >
        <Row gutter={[32, 32]} className="crypto-card-container">
          {loadedCryptos?.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency?.uuid}
            >
              <NavLink to={`/crypto/${currency?.uuid}`}>
                <CurrencryCard currency={currency} />
              </NavLink>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </>
  );
}

export default Cryptocurrencies;

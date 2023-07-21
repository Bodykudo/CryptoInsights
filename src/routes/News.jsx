import { useState } from 'react';
import { Select, Row, Col } from 'antd';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

import NewsCard from '../components/NewsCard';
import Loader from '../components/Loader';

const { Option } = Select;

function News({ simplified }) {
  // The default count of news is 300
  const count = simplified ? 6 : 300;

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  // Get the list of news
  const { data: newsList, isLoading } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count,
  });

  // Get the list of Cryptocurrencies for the filtering
  const { data: cryptos, isLoading: isLoadingCryptos } =
    useGetCryptosQuery(100);

  if (isLoading || isLoadingCryptos || !newsList?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a  Cryptocurrency"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">All</Option>
            {cryptos?.data?.coins.map((coin) => (
              <Option value={coin.name} key={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}

      {newsList?.value?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <NewsCard news={news} />
        </Col>
      ))}
    </Row>
  );
}

export default News;

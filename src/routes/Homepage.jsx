import { Typography } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from '../components/Loader';
import Statistics from '../components/Statistics';
import NewsList from '../components/NewsList';
import CryptosList from '../components/CryptosList';

function Homepage() {
  const { data, isLoading } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isLoading) return <Loader />;

  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>
      <Statistics data={globalStats} />
      <CryptosList />
      <NewsList />
    </>
  );
}

export default Homepage;

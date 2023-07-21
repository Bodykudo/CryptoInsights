import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Typography, Select } from 'antd';

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from '../services/cryptoApi';
import Loader from '../components/Loader';
import LineChart from '../components/LineChart';
import CryptoStats from '../components/CryptoStats';
import CryptoLinks from '../components/CryptoLinks';

const { Option } = Select;

function CryptoDetails() {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isLoading } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory, isLoadingHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isLoading) return <Loader />;

  const times = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Typography.Title level={2} className="coin-name">
          {cryptoDetails.name} ({cryptoDetails.symbol}) Price
        </Typography.Title>
        <p>
          {cryptoDetails.name} live price in US dollars. View value statistics,
          market cap and supply.
        </p>
      </Col>
      <Select
        defaultValue={timePeriod}
        className="select-timeperiod"
        placeholder="Select Time Period"
        onChange={(value) => setTimePeriod(value)}
      >
        {times.map((time) => (
          <Option key={time}>{time}</Option>
        ))}
      </Select>

      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails.price)}
        coinName={cryptoDetails.name}
      />

      <CryptoStats cryptoDetails={cryptoDetails} />
      <CryptoLinks cryptoDetails={cryptoDetails} />
    </Col>
  );
}

export default CryptoDetails;

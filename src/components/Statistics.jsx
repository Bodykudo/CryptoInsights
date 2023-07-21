import { Col, Row, Statistic } from 'antd';
import millify from 'millify';

function Statistics({ data }) {
  return (
    <Row>
      <Col span={12}>
        <Statistic title="Total Cryptocurrencies" value={data.total} />
      </Col>

      <Col span={12}>
        <Statistic
          title="Total Exchanges"
          value={millify(data.totalExchanges)}
        />
      </Col>

      <Col span={12}>
        <Statistic
          title="Total Market Cap"
          value={millify(data.totalMarketCap)}
        />
      </Col>

      <Col span={12}>
        <Statistic
          title="Total 24 Volume"
          value={millify(data.total24hVolume)}
        />
      </Col>

      <Col span={12}>
        <Statistic title="Total Markets" value={millify(data.totalMarkets)} />
      </Col>
    </Row>
  );
}

export default Statistics;

import { Col, Row, Typography } from 'antd';
const { Title } = Typography;

function CryptoLinks({ cryptoDetails }) {
  return (
    <Col className="coin-links">
      <Title level={3} className="coin-details-heading">
        {cryptoDetails.name} Links
        {cryptoDetails.links.map((link) => (
          <Row className="coin-link" key={`${link.name}${Math.random()}`}>
            <Title level={5} className="link-name">
              {link.type}
            </Title>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </Row>
        ))}
      </Title>
    </Col>
  );
}

export default CryptoLinks;

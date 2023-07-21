import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import Cryptocurrencies from '../routes/Cryptocurrencies';

const { Title } = Typography;

function CryptosList() {
  return (
    <>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>

        <Title level={3} className="show-more">
          <NavLink to="/cryptocurrencies">Show More</NavLink>
        </Title>
      </div>
      <Cryptocurrencies simplified />
    </>
  );
}

export default CryptosList;

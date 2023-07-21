import { Typography, Space } from 'antd';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <Typography.Title
        level={5}
        style={{ color: 'white', textAlign: 'center' }}
      >
        CryptoInsights
      </Typography.Title>
      <Space>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/exchanges">Exchanges</NavLink>
        <NavLink to="/news">News</NavLink>
      </Space>
    </div>
  );
}

export default Footer;

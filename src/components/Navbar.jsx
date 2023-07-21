import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Avatar, Typography, Button, Menu } from 'antd';
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

function Navbar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home',
      href: '/home',
    },
    {
      key: 'cryptocurrencies',
      icon: <FundOutlined />,
      label: 'Cryptocurrencies',
      href: '/cryptocurrencies',
    },
    {
      key: 'news',
      icon: <BulbOutlined />,
      label: 'News',
      href: '/news',
    },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src="/cryptocurrency.png"
          size="large"
          alt="Logo"
          style={{ borderRadius: '0' }}
        />
        <Typography.Title level={2} className="logo">
          <NavLink to="home">CryptoInsight</NavLink>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu
          theme="dark"
          defaultSelectedKeys={[
            location.pathname.substring(
              location.pathname.lastIndexOf('/') + 1
            ) || 'home',
          ]}
        >
          {menuItems.map((item) => (
            <Menu.Item
              icon={item.icon}
              style={{ borderRadius: 0 }}
              key={item.key}
            >
              <NavLink to={item.href}>{item.label}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      )}
    </div>
  );
}

export default Navbar;

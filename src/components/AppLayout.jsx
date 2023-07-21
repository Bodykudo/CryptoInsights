import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';

function AppLayout() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Outlet />
          </div>
        </Layout>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;

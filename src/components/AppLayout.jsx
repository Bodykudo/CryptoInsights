import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';

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

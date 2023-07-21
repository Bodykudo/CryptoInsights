import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import News from '../routes/News';

const { Title } = Typography;

function NewsList() {
  return (
    <>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>

        <Title level={3} className="show-more">
          <NavLink to="/news">Show More</NavLink>
        </Title>
      </div>
      <News simplified />
    </>
  );
}

export default NewsList;

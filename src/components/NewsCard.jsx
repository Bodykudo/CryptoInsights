import { Typography, Card, Avatar } from 'antd';
import moment from 'moment';
const { Text, Title } = Typography;

const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

function NewsCard({ news }) {
  return (
    <Card hoverable className="news-card">
      <a href={news.url} target="_blank" rel="noreferrer">
        <div className="news-image-container">
          <Title className="news-title" level={4}>
            {news?.name}
          </Title>
          <img
            style={{ maxWidth: '200px', maxHeight: '100px' }}
            src={news?.image?.thumbnail?.contentUrl || demoImage}
            alt={news?.name}
          />
        </div>
        <p>
          {news?.description > 100
            ? `${news?.description?.substring(0, 100)}...`
            : `${news?.description}`}
        </p>
        <div className="provider-container">
          <div>
            <Avatar
              src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
              alt={news?.provider[0]?.name || 'News Provider'}
            />
            <Text className="provider-name">{news?.provider[0]?.name}</Text>
          </div>
          <Text>{moment(news?.datePublished).startOf('ss').fromNow()}</Text>
        </div>
      </a>
    </Card>
  );
}

export default NewsCard;

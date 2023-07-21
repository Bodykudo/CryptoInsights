import { Card } from 'antd';
import millify from 'millify';

function CurrencryCard({ currency }) {
  return (
    <Card
      title={`${currency?.rank}. ${currency?.name}`}
      extra={<img className="crypto-image" src={currency?.iconUrl} />}
      hoverable
    >
      <p>Price: {millify(currency?.price)}</p>
      <p>Market Cap: {millify(currency?.marketCap)}</p>
      <p>Daily Change: {millify(currency?.change)}%</p>
    </Card>
  );
}

export default CurrencryCard;

import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="page-not-found">
      <div className="container-not-found">
        <img src="/error.png" alt="" className="image-not-found" />
        <Typography.Title level={1} className="title-not-found">
          404 Error
        </Typography.Title>
        <Typography.Text className="text-not-found">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </Typography.Text>
        <Button
          className="button-not-found"
          size="large"
          style={{ width: '40%' }}
          onClick={() => navigate(-1)}
        >
          &larr; Go back
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;

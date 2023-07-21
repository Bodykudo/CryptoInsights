import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import './App.css';
import Homepage from './routes/Homepage';
import Cryptocurrencies from './routes/Cryptocurrencies';
import News from './routes/News';
import PageNotFound from './routes/PageNotFound';
import CryptoDetails from './routes/CryptoDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="crypto/:coinId" element={<CryptoDetails />} />
          <Route path="news" element={<News />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

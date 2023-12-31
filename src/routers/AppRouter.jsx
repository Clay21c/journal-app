import { Route, Routes } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import JournalPage from '../components/journal/JournalPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<JournalPage />} />
      <Route path='/auth/*' element={<AuthRouter />} />
      <Route path='*' element={<h1>Page not found</h1>} />
    </Routes>
  );
};
export default AppRouter;

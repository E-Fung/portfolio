import { Sidebar } from './components';
import MainPage from './MainPage';

function App() {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <MainPage />
    </div>
  );
}

export default App;

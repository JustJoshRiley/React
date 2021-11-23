import './App.css';
import Title from '../Components/Title/Title.js';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Title />
        <Outlet />
        <Footer />
    </div>

  );
}

export default App;

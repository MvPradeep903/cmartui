import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      {/* <h1>App</h1> */}
      <ToastContainer/>
      <Outlet/>
    </div>
  );
}

export default App;

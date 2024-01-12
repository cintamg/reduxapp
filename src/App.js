import './App.css';
import Navebar from './Components/Navebar';
import Shop from './Components/Shop';

function App() {
  return (
    <>
    <Navebar/>
    <div className="container">
      <Shop/>
    </div>
    </>
  );
}

export default App;

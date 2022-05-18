import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';

function App() {
  return (
    <div className="App">
      {/* <img src={'/public/webgl.png'}/> */}
      <BrowserRouter>
      <br></br>
      <br></br>
       <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;

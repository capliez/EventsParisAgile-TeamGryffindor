import { Provider } from 'react-redux';
import store  from './store/store';
import './App.css';
import Map from './Components/Map';
import SideBar from './Components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Map />
      <SideBar />
    </div>
  );
}

export default App;

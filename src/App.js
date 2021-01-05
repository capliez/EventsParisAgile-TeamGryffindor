import './App.css';
import Map from './Components/Map';
import Event from './Components/Event';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchEngine from './Actions/SearchEngine';

function App() {
  return (
    <div className="App">
      <Event/>
      <SearchEngine />
    </div>
  );
}

export default App;

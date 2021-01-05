import './App.css';
import Map from './Components/Map';
import Event from './Components/Event';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchEngine from './Actions/SearchEngine';

function App() {
  return (
    <div>
      <Event/>
      <SearchEngine params={{q: 'melun'}} />
    </div>
  );
}

export default App;

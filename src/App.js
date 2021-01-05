import { Provider } from 'react-redux';
import store  from './store/store';
import './App.css';
import Map from './Components/Map'
import SearchEngine from './Actions/SearchEngine';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Map/>
        <SearchEngine params={{q: 'melun'}} />
      </div>
    </Provider>
  );
}

export default App;

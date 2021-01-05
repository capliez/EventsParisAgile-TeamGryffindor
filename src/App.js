import './App.css';
import SearchEngine from './Actions/SearchEngine';

function App() {
  return (
    <div>
      <SearchEngine params={{q: 'melun'}} />
    </div>
  );
}

export default App;

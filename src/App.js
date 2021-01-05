import { Provider } from 'react-redux';
import store  from './store/store';
import './App.css';
import Map from './Components/Map';
import SideBar from './Components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Image, Container } from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
      <Row className="App" style={{flex: 1, flexDirection: 'row'}}>
        <Col lg={6}>
          <SideBar />
        </Col>
        <Col>
          <Map />
        </Col>
      </Row>
    </Provider>
  );
}

export default App;

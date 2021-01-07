import React, { Component } from "react";
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ReactHtmlParser from 'react-html-parser'
import Marker from 'react-leaflet-enhanced-marker'
import iconMap from '../../assets/pin_map.png'

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ResultsReducer } = this.props
    return (      
      <div>
        <MapContainer
          style={{ height: "100vh" }}
          center={[48.8534, 2.3488]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {ResultsReducer.isLoaded ? ResultsReducer.results.map((element, i) => (
            <Marker  icon={element.isActive === true ? <img style={{width: 30}} src={iconMap} /> : <img style={{width: 20}} src={iconMap} />} key={i} position={element.geometry ? [element.geometry.coordinates[1], element.geometry.coordinates[0]] : [0,0]}>
              <Popup>
                {element.fields.title}<br/>{element.fields.address_name}<br/>{ReactHtmlParser(element.fields.date_description)}
              </Popup>
            </Marker>
          ))
        : null}
        </MapContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ResultsReducer : state.ResultsReducer
})

export default connect(mapStateToProps, {})(Map);

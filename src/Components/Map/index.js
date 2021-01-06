import React, { Component } from "react";
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import ReactHtmlParser from 'react-html-parser'

class Map extends Component {
  constructor(props) {
    super(props);

    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;
  }

  render() {
    const { ResultsReducer } = this.props
    return (      
      <div>
        <MapContainer
          style={{ height: "100vh" }}
          center={[48.8534, 2.3488]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {ResultsReducer.isEvent && 
             <Marker  key={ResultsReducer.currentEvent.fields.id} position={ResultsReducer.currentEvent.geometry ? [ResultsReducer.currentEvent.geometry.coordinates[1], ResultsReducer.currentEvent.geometry.coordinates[0]] : [0,0]}>
             <Popup>
               {ResultsReducer.currentEvent.fields.title}<br/>{ResultsReducer.currentEvent.fields.address_name}<br/>{ReactHtmlParser(ResultsReducer.currentEvent.fields.date_description)}
             </Popup>
           </Marker>
          }
          
          {ResultsReducer.isLoaded && !ResultsReducer.isEvent ? ResultsReducer.results.map((element, i) => (
            <Marker  key={i} position={element.geometry ? [element.geometry.coordinates[1], element.geometry.coordinates[0]] : [0,0]}>
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

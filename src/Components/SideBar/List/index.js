import React, { Component } from "react";
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser'
import Cards from './Cards'
import { Spinner } from 'react-bootstrap'
import { setCurrentEvent } from "./../../../Actions/SearchEngine";

class List extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const { ResultsReducer, addCurrentEvent } = this.props
    
    if(ResultsReducer.results) {
        return (      
            <div className="eventScroll">
              {ResultsReducer.results.map((element, i) => (
                  <Cards addCurrentEvent={(i, b) => addCurrentEvent(i, b)} key={i} data={element}/>
              ))}
            </div>
        );
    }

    return (      
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
    
  }
}

const mapStateToProps = state => ({
  ResultsReducer : state.ResultsReducer
})

const mapDispatchToProps = {
  addCurrentEvent: setCurrentEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

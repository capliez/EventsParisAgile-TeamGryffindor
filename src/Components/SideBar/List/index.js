import React, { Component } from "react";
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser'
import Cards from './Cards'
import { Spinner } from 'react-bootstrap'


class List extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { ResultsReducer } = this.props
    console.log('List index', ResultsReducer);
    
    if(ResultsReducer.results) {
        return (      
            <div className="eventScroll">
              {ResultsReducer.results.map((element, i) => (
                  <Cards key={i} data={element}/>
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

export default connect(mapStateToProps, {})(List);

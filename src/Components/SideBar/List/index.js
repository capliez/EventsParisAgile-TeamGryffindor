import React, { Component } from "react";
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser'
import Cards from './Cards'
import { Spinner } from 'react-bootstrap'
import {setResults} from '../../../Actions/SearchEngine'

class List extends Component {
  constructor(props) {
    super(props);

  }

  async handleHover(item) {
    const {ResultsReducer} = this.props;
    const array = ResultsReducer.results
    array.filter(element => element.recordid === item.recordid ? element.isActive = true : element.isActive = false)
    await this.props.setResults({array: array, bool : true,})
    ResultsReducer.results.map(element => {
      console.log(element.isActive)
    })
  }

  render() {
    const { ResultsReducer } = this.props
    console.log('List index', ResultsReducer);
    
    if(ResultsReducer.results) {
        return (      
            <div className="eventScroll">
              {ResultsReducer.results.map((element, i) => (
                <div onMouseEnter={() => this.handleHover(element)}>
                  <Cards key={i} data={element}/>
                </div>
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

export default connect(mapStateToProps, {setResults})(List);

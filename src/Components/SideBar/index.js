import React, { Component } from 'react'
import List from './List'
import SearchBar from './SearchBar/SearchBar'
import DateBar from './SearchBar/DateBar';
import { connect } from 'react-redux';
import SeeEvent from './Event'
import { Fragment } from 'react';
import { setCurrentEvent } from "./../../Actions/SearchEngine";

class SideBar extends Component {
    
    render() {
        const {ResultsReducer, addCurrentEvent} = this.props
        return(
            <div style={{overflowY : "hidden"}}>
                {ResultsReducer.isEvent ? <SeeEvent setCurrentEvent={() => addCurrentEvent(null, false) } data={ResultsReducer.currentEvent}/> :
                    <Fragment>
                        <SearchBar />
                        <DateBar />
                        <List />
                    </Fragment>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ResultsReducer : state.ResultsReducer
})

const mapDispatchToProps = {
    addCurrentEvent: setCurrentEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

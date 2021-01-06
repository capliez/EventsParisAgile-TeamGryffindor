import React, { Component } from 'react'
import List from './List'
import Event from './Event'
import SearchBar from './SearchBar/SearchBar'
import DateBar from './SearchBar/DateBar';

class SideBar extends Component {
    render() {
        return(
            <div style={{overflowY : "hidden"}}>
                {/* <Event /> */}
                <SearchBar />
                <DateBar />
                <List />
            </div>
        )
    }
}




export default SideBar;
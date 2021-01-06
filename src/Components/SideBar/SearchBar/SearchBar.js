import React from 'react'
import { connect } from 'react-redux';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { searchByName, initialSearch } from "./../../../Actions/SearchEngine";

class SearchBar extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        searchQuery: '',
        list: []
      }
    }

  componentDidMount(){
    this.props.initialSearch()
    }

  async setKeywords(e){
    this.setState({searchQuery: e.target.value}); 
    await this.props.searchByName(e.target.value)
  }

  render() {
    const {searchQuery} = this.state
    return (
        <div>
            <InputGroup className="p-3">
                <FormControl
                placeholder="Search for an event"
                aria-label="Search for an event"
                aria-describedby="basic-addon2"
                value={searchQuery}
                onInput={e => this.setKeywords(e)}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={e => searchByName(searchQuery)}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
  }
}


const mapStateToProps = state => ({
  ResultsReducer : state.ResultsReducer
})

export default connect(mapStateToProps, {searchByName, initialSearch})(SearchBar);
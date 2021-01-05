import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { searchByName } from "./../../../Actions/SearchEngine";

const API_URL = "https://opendata.paris.fr"

class SearchBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          searchQuery: '',
          list: []
        }
      }

    componentDidMount(){
        // call get random api
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
                    onInput={e => {this.setState({searchQuery: e.target.value}); searchByName(e.target.value)}}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={e => searchByName(searchQuery)}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
      }
}

export default SearchBar;

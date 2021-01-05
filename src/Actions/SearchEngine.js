import React from 'react'
import axios from 'axios'
import { InputGroup, FormControl } from 'react-bootstrap';

const API_URL = "https://opendata.paris.fr"

class SearchEngine extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          events: [],
          store: []
        }
      }

    componentDidMount(){
        axios.get(API_URL + '/api/records/1.0/search/?dataset=que-faire-a-paris-')
        .then(json => json.data.records.map(result => (
          {
            fields: {
                name: `${result.fields.title}`
            }
          })))
        .then(newData => this.setState({events: newData, store: newData}))
        .catch(error => alert(error))
      }

      render() {
        const {events} = this.state
        console.log(events)
        return (
          <div className="Card">
            <input placeholder='Search for an event' className=''></input>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Search for an event"
                aria-label="Search for an event"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <InputGroup.Text id="basic-addon2"><i class="fas fa-search"></i></InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <div className="header">NAME LIST</div>
            {events.map((event, index) => {return (
                <div key={index}>
                    <h4>{event.fields.name}</h4>
                </div>
            )})}
          </div>
        );
      }
}

export default SearchEngine;

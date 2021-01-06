import React from 'react'
import { connect } from 'react-redux';
import { searchByDate } from "./../../../Actions/SearchEngine";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'

class DateBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date : Date.now()
    }
  }

  setDate(e){
    this.setState({
      date : Date.parse(e)
    })
    this.props.searchByDate(moment(e).format('YYYY-MM-DD'))
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <DatePicker 
        dateFormat="dd/MM/yyyy"
        selected={date} 
        onChange={(e) => this.setDate(e)} //when day is clicked
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ResultsReducer : state.ResultsReducer
})

export default connect(mapStateToProps, {searchByDate})(DateBar);
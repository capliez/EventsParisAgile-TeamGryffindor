import axios from 'axios'
import { RESULTS_LOADED, ERROR_LOADED } from './type'

const API_URL = "https://opendata.paris.fr"

export const initialSearch = name => dispatch => {
  axios.get(API_URL + '/api/records/1.0/search/?dataset=que-faire-a-paris-&q=')
        //success
        .then(async newData => dispatch(setResults({bool : true, array : await newData.data.records})))
        //fail
        .catch(error => dispatch(setError(error)))
}

export const searchByName = name => dispatch => {
    axios.get(API_URL + '/api/records/1.0/search/?dataset=que-faire-a-paris-&q=' + name)
        //success
        .then(async newData => dispatch(setResults({bool : true, array : await newData.data.records})))
        //fail
        .catch(error => dispatch(setError(error)))
}


// Pas encore fonctionnel
export const searchByDate = date => dispatch => {
    axios.get(API_URL + '/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=date_start&refine.date_start=' + date)
      // Success
        .then(async newData => dispatch(setResults({bool : true, array : await newData.data.records})))
      // FAIL
      .catch(error => dispatch(setError(error)))
}

export const setResults = (res) => { 
  return {
    type: RESULTS_LOADED,
    value : res,
  }
}

export const setError = value => {
  return {
    type: ERROR_LOADED,
    value : value
  }
}

import React from 'react'
import axios from 'axios'
const API_URL = "https://opendata.paris.fr"

export function searchByName(name) {
    axios.get(API_URL + '/api/records/1.0/search/?dataset=que-faire-a-paris-&q=' + name)
        .then(json => json.data.records.map(result => (
          {
            fields: {
                name: `${result.fields.title}`
            }
          })))
          // Success
          .then(newData => console.log(newData)) // dispatch ici
          // FAIL
          .catch(error => console.log(error)) // dispatch ici
}


// Pas encore fonctionnel
export function searchByDate(date) {
    axios.get(API_URL + '/api/records/1.0/search/?dataset=que-faire-a-paris-')
        .then(json => json.data.records.map(result => (
          {
            fields: {
                name: `${result.fields.title}`
            }
          })))
          // Success
          .then(newData => console.log(newData)) // dispatch ici
          // FAIL
          .catch(error => console.log(error)) // dispatch ici
}


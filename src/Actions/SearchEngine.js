const axios = require('axios');
const API_URL = "https://opendata.paris.fr"

function FilterDataFromAPI(params) {
    // Make a request for a user with a given ID
    axios.get(API_URL + '/api/records/1.0/search/?dataset=que-faire-a-paris-', {
        // Si vide on remplace par {}
        params: params?params:{}
      })
    .catch(function (error) {
        // handle error
        console.log(error.message);
        return (
            <div>
                <p>{error}</p>
            </div>
        );
    })
    .then(function (response) {
        // handle success
        console.log(response);
        return (
            <div>
                <p>{response}</p>
            </div>
        );
    })
    return (
        <div>
          <h1>Wuuuuuut !?</h1>
        </div>
    );
}

export default FilterDataFromAPI;

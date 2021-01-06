import React from 'react'
import { Form } from 'react-bootstrap';
import { searchByDate } from "./../../../Actions/SearchEngine";

const API_URL = "https://opendata.paris.fr"

function DateBar() {
        const options = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
        return (
            <div>
                <Form.Group controlId="exampleForm.SelectCustom" className='p-3'>
                  <Form.Label>Modified</Form.Label>
                  <Form.Control as="select" onChange={e => searchByDate(e.target.value) } custom>
                    {options.map((year, index) => {
                      return <option key={index}>{year}</option>
                    })}
                  </Form.Control>
                </Form.Group>
            </div>
        );
}

export default DateBar;

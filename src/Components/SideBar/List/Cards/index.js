import React, { Component } from "react";
import { ListGroup, Image, Row, Col } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser'


class Cards extends Component {

  render() {
    const {data, addCurrentEvent} = this.props
    return (      
        <ListGroup>
            <ListGroup.Item onClick={() => addCurrentEvent(data, true)} action >
                <Row style={{color : "#000" }}>
                    <Col md={8}>
                        <h4>{data.fields.title}</h4>
                        <p className="cardDetailsMargin" style={{fontWeight: "bold"}}>{ReactHtmlParser(data.fields.date_description)}</p>
                        <p className="cardDetailsMargin">{data.fields.address_city}</p>
                        <p className="cardDetailsMargin" style={{textDecoration: "underline"}}>{data.fields.lead_text}</p>
                        <p className="cardDetailsMargin">Accès : {data.fields.transport}</p>
                    </Col>
                    <Col md={4}>
                        <Image src={data.fields.cover_url} alt="event_thumbnail" thumbnail />           
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    );
  }
}

export default Cards;

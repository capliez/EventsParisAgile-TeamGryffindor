import React, {Component} from 'react';
import { Image, Container, Button } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser'
import 'moment/locale/fr'
import moment from 'moment'

class Event extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){
      moment.locale('fr')
    }

    render(){
      const {data, setCurrentEvent} = this.props
     
      return(
        <div id="seeEvent" className="currentEventScroll">
                <div className="mb-3">
                  <Button onClick={() => setCurrentEvent()} variant="secondary" block>Retour</Button>
                </div>
              <div className="text-center">
              <Image alt={data.fields.cover_alt} fluid src={data.fields.cover_url} />
              </div>
              
              
              <Container></Container>
                <div className="mt-2 text-center">
                  <h1 className="h2 font-weight-bold">{data.fields.title}</h1>
                </div>

                <div className="mt-3 text-secondary">
                  <p className="mb-0">Début : {moment(data.fields.date_start).format("LLLL")}</p>
                  <p className="mb-0">Fin : {moment(data.fields.date_end).format("LLLL")}</p>
                  <br/>
                  <p>{data.fields.address_name}, {data.fields.address_street} {data.fields.address_city} {data.fields.address_zipcode}</p>
                  <p>Catégorie : {data.fields.category}</p>
                </div>
                <div>
                  <p className="text-secondary">
                    {data.fields.lead_text}
                  </p>
                </div>
                <div>
                  <h2 className="h4">Description</h2>
                </div>
                <div className="text-secondary">
                  {ReactHtmlParser(data.fields.description)}
                  {ReactHtmlParser(data.fields.date_description)}                
                </div>
                

                <div className="mb-2 mt-2">
                  <h2 className="h4">Accès</h2>
                  <p className="text-secondary">{data.fields.address_name}, {data.fields.address_street} {data.fields.address_city} {data.fields.address_zipcode}</p>
                  <p className="text-secondary">Métro : {data.fields.transport}</p>
                </div>

                <div className="mb-2 mt-2">
                  <h2 className="h4">Réservation</h2>
                  <p className="text-secondary">Type d'accès : <span className="text-success">{data.fields.access_type}</span></p>
                  <p className="text-secondary">{data.fields.access_mail && "Email : " + data.fields.access_mail}</p>
                  <p className="text-secondary">{data.fields.access_phone && "Téléphone : " + data.fields.access_phone}</p>
                  <a target="_blanck" href={data.fields.access_link} className="text-secondary">{data.fields.access_link &&  data.fields.access_link }</a>
                  {data.fields.price_detail && <p className="text-secondary">{data.fields.price_detail}</p>}

                </div>

                <div className="mb-4 mt-2">
                  <h2 className="h4">Contact</h2>
                  <p className="text-secondary">{data.fields.contact_name && "Nom du contact : " + data.fields.contact_name}</p>
                  <p className="text-secondary">{data.fields.contact_mail && "Email : " + data.fields.contact_mail}</p>
                  <p className="text-secondary">{data.fields.contact_phone && "Téléphone : " + data.fields.contact_phone}</p>
                  <p className="text-secondary">{data.fields.contact_facebook && "Facebook :" + data.fields.contact_facebook }</p>
                  <a target="_blanck" href={data.fields.contact_url} className="text-secondary">{data.fields.contact_url && "Site : " + data.fields.contact_url }</a>
                </div>

        </div>
      )
    }

}

export default Event
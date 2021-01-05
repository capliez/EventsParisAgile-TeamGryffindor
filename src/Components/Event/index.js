import React, {Component} from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import Map from '../Map';

class Event extends Component {
    constructor(props) {
      super(props);
    }

    render(){
      return(
        <div id="seeEvent">
          <Row noGutters>
            <Col lg={6} className="eventScroll">
              <Image fluid src="https://www.carreaudutemple.eu/sites/default/files/styles/1200x465/public/images/cineclub_-_border_-_ali_abbassi_2.jpg?itok=eInv3iNx" />
              
              <Container>
                
                <div className="mt-2 text-center">
                  <h1 className="h2 font-weight-bold">Cinéclub - "Border" d'Ali Abbassi</h1>
                </div>

                <div className="mt-3 text-secondary">
                  <p className="mb-0">Mardi 2 février 2021 de 19h30 à 21h40</p>
                  <p>2 rue Perrée 75009 Paris</p>
                </div>

                <div>
                  <h2 className="h4">Description</h2>
                  <p className="text-secondary">
                  Fidèle programmateur du Cinéclub du Carreau du Temple, CinéCaro, association d’amoureux du septième art, vous dévoile pour cette nouvelle saison ses « coups de coeur ». Un voyage à travers la cinématographie mondiale à l’occasion de six séances accompagnées, comme toujours, d’interventions de professionnels ayant participé aux films : réalisateurs, acteurs, décorateurs...<br/>
                  Le Cinéclub du Carreau, c’est des fictions et documentaires ouverts sur le monde du cinéma, pour notre plus grand plaisir et notre culture cinématographique.<br/>
                  Tina, douanière à l’efficacité redoutable, est connue pour son odorat extraordinaire. C'est presque comme si elle pouvait flairer la culpabilité d’un individu. Mais quand Vore, un homme d'apparence suspecte, passe devant elle, ses capacités sont mises à l'épreuve pour la première fois. Tina sait que Vore cache quelque chose, mais n’arrive pas à identifier quoi. Pire encore, elle ressent une étrange attirance pour lui...
                  <br/><br/>
                  Durée : 1h50                  
                </p>
                </div>

                <div className="mb-4">
                  <h2 className="h4">Métro</h2>
                  <p className="text-secondary">3: Temple (188m) 3,8,9,11: République (348m)</p>
                </div>

              </Container>

            </Col>
            <Col lg={6}> 
              <Map/>
            </Col>
          </Row>
        </div>
      )
    }

}

export default Event
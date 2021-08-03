import { useParams } from "react-router";
import {Container,Row,Col} from "react-bootstrap";

function Child({tour}){
    let { slug } = useParams();
    let c = tour.find(el => el.id == slug);
    return(
        <div>
            <Container>
          <h1 style={{marginLeft : '5%', color : 'gray'}}>{c.title}</h1>
          <br/>
          <Row>
            <Col>
            <img src={c.posterURL} alt='' style={{width : '60%', marginLeft : '20%'}}/>
            </Col>
            <Col>
              <h3 style={{color : 'darkgray'}}>Description</h3>
              <h4>{c.description}</h4>
              <br/>
              <h3 style={{color : 'darkgray'}}>Prix</h3>
              <h4>{c.price}</h4>                   
              
            </Col>
          </Row>
         
          
          </Container>
        </div>
    )
}

export default Child;
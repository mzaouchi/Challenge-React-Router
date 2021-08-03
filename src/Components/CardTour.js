import { Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteTour from './DeleteTour';
import ReadMore from './ReadMore';
function CardTour({el,setTour,tour}){
    let showText = false;
    return(
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.posterURL} style={{height : '170px'}} />
                <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text><ReadMore el={el}/></Card.Text>
                    <Card.Text>Prix : {el.price} DT</Card.Text>
                    <Link to={`/voyage/${el.id}`} >Plus de détails</Link>  
                    <br/><br/>
                    <DeleteTour el={el} tour={tour} setTour={setTour}></DeleteTour>
                                      
                    
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardTour;
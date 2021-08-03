import { useEffect } from 'react';
import {Container,Button} from 'react-bootstrap'
function Rafraichir(){
    
    return(
        <div>
        <Container> 
            <Button variant="warning" href='/voyage'>Rafraîchir</Button> 
        </Container>
        </div>
    )
}

export default Rafraichir;
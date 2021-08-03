import { Container,Navbar,Nav,InputGroup,FormControl, Form } from 'react-bootstrap';
function NavBarTour({setText}){
    return(
        <Container >
                <Navbar bg="light" variant="light" style={{paddingLeft : '100px'}}>
                    
                        <Navbar.Brand><img src='./mahmoudnet.png' alt='' style={{height : '30px'}} /></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href='/'>Accueil</Nav.Link>
                            <Nav.Link href='/voyage'>Nos voyages touristiques</Nav.Link>
                            <Nav.Link href='/ajoutvoyage'>Ajouter un voyage</Nav.Link>
                            
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Recherche" onChange={(e)=>setText(e.target.value)} style={{marginLeft:"222%", marginTop : "1%"}} />
                                </Form.Group>
                            </Form>


                            
                        </Nav>
                        
                        
                </Navbar>            
        </Container>
    )
}

export default NavBarTour;
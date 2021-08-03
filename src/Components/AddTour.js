import { useState } from 'react';
import {Container, Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddTour({tour,setTour,rec,setRec}){
    const [titlea, setTitlea] = useState('');
    const [descriptiona,setDescriptiona] = useState('');
    const [posterURLa,setPosterURLa] = useState('');
    const [pricea,setPricea] = useState(0);

    const handleAdd =()=>{
        
        setTour(
             [...tour,{title : titlea,posterURL : posterURLa,description : descriptiona,price : pricea, id :tour.length+1 }]
        );

        setRec(
            [...rec,{title : titlea,posterURL : posterURLa,description : descriptiona,price : pricea, id :tour.length+1 }]
       );
        
    }
     return(

         <div>
             <div>
             
             </div>
             
             <Container>
             <Button variant="secondary" href='/' style={{ marginLeft:'43%'}}>Retour page d'accueil</Button>
                 <br/><br/><br/>
                <Form style={{width:'50%', margin:'auto'}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le titre" onChange={(e)=>setTitlea(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Entrez la description" onChange={(e)=>setDescriptiona(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le chemin" onChange={(e)=>setPosterURLa(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Prix</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le prix" onChange={(e)=>setPricea(e.target.value)} />
                        </Form.Group>
                        
                        <Link to ='/voyage'><Button variant="primary" type="submit" onClick={()=>handleAdd()}>Ajouter</Button></Link>
                </Form>
             </Container>
         </div>
     )   
}

export default AddTour;
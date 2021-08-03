
import { Container,Button,Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardTour from "./CardTour";
import Rafraichir from "./Rafraichir";
import { useEffect,useState } from "react";
import { waitFor } from "@testing-library/react";




function ListTour({tour,setTour,text,rec}){
    const [loading,setLoading] = useState(false);

const handleReload=(a)=>{
    
    setLoading(true);
    
    
    setTimeout((a) => {setLoading(false);
        
        setTour(rec); }, 2000);
         
    
 
     
}

let x = tour.filter(el=> el.title.toLowerCase().includes(text.toLowerCase())).map(el=> <CardTour el = {el} setTour={setTour} tour={tour}></CardTour>)
    return(
        <Container>
        <Button variant="secondary" href='/' style={{ marginLeft:'43%'}}>Retour page d'accueil</Button>
        <br/>
        <br/>
        <div style={{display :'flex', justifyContent:'space-around', flexWrap : 'wrap'}}>
            {(x.length ==  0 && loading == false && text =='') ? <Button variant="warning" onClick={()=>handleReload(x)} >Rafraîchir</Button> : loading == true ? <Spinner animation="border" />:(x.length ==  0 && loading == false)? <h1>Cette destination n'est pas disponible</h1> : x}

        </div>
        </Container>
    )
}

export default ListTour;
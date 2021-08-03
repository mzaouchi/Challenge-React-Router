import { Button } from "react-bootstrap";
function DeleteTour({tour,setTour,el}){
   const handleDelete=(a)=>{
       setTour(
            tour.filter(el => el.id !== a.id)
       )
       
   }
    return(
        <Button variant="danger" onClick={()=>handleDelete(el)}>Pas intéressé</Button>
    )
}

export default DeleteTour;
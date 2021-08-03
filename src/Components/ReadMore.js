import { useState } from "react";

function ReadMore({el}){
    const text = el.description;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
    return(
        <p style={{display:'inline', width :'100%'}}>
            {isReadMore ? text.slice(0,50) : text}
            <span onClick={toggleReadMore} style={{color : 'green', cursor : 'pointer'}}>
                {isReadMore ? " Lire la suite" : " Lire moins "}
            </span>
        </p>
    )
}

export default ReadMore;
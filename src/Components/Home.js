import { Carousel,Container } from 'react-bootstrap';
function Home({tour}){
    return(
        <div>
            <Container>
            <Carousel style={{width : '75%', margin : 'auto'}}>
                {
                    tour.map(el=>
                        
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={el.posterURL}
                            alt=""
                            style={{width : '1024px', height :'576px'}}
                            />
                            <Carousel.Caption>
                            <h3>{el.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        )
                }
                
                
            </Carousel>
            </Container>

        </div>
    )
}

export default Home;
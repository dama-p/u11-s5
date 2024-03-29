import { Container, Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFave } from "../redux/action";

const LibraryComponent = function () {
  const favouriteList = useSelector((state) => {
    return state.favourites.content;
  });

  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center mx-auto">
        <Col className="col-9">
          <Link to={"/"}>
            <Button id="signup-btn">Back</Button>
          </Link>
        </Col>

    
            

            {favouriteList.map((title, index) => {
          console.log(favouriteList);
          console.log(title);
          return (
            <>
            <Col className="d-flex col-9">{title}
                  <Button
                  className="ms-auto"
                    variant="danger"
                    onClick={() => {
                      dispatch(removeFave(index));
                    }}
                  >
                    {" "}
                    Remove
                  </Button>
                  </Col>
                  </>
             
          );
        })}
                
            
        
      </Row>

      
            
       
    </Container>
  );
};

export default LibraryComponent;

import { Container, Navbar, Button } from "react-bootstrap";
import { UserAuth } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function CreateNavbar() {
//   const { user, logout } = UserAuth();
    // const navigate = useNavigate("");

//   const handleLogout = async () => {
//     await logout();
//     navigate("/home");
//   };
  return (
    <>
      <Navbar bg="light" variant="light" style={{ marginBottom: 10 }}>
        <Container>
          <Navbar.Brand href="#home">Dumpr</Navbar.Brand>
          <div className="me-auto" style={{ display: "flex" }}>
            <Link
              style={{
                textDecoration: "none",
                marginTop: "7px",
                color: "gray",
                marginRight: "10px"
              }}
              to="/home"
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                marginTop: "7px",
                color: "gray",
                marginRight: "10px"
              }}
              to="/features"
            >
              Features
            </Link>
            <Link
              style={{
                textDecoration: "none",
                marginTop: "7px",
                color: "gray",
                marginRight: "10px"
              }}
              to="/pricing"
            >
              Pricing
            </Link>
            {/* {!user && ( */}
              <Link to="./auth/signup">
                <Button style={{ marginRight: 10 }}>Signup</Button>
              </Link>
            {/* )} */}
            {/* {!user && (
              <Link to="./auth/login">
                <Button
                  variant="outline-primary"
                  className="float-right"
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    float: "right"
                  }}
                >
                  Login
                </Button>
              </Link>
            )} */}
            {/* {user && ( */}
              <Button
                variant="danger"
                className="float-right"
                // onClick={handleLogout}
              >
                Logout
              </Button>
            {/* )} */}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default CreateNavbar;
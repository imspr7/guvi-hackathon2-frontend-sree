import {
    FaUserSecret,
    FaRegEdit,
    FaBookReader,
    FaRegFileAlt,
    FaVolleyballBall,
    FaShoppingCart,FaHome,FaSignOutAlt,FaUserCircle

} from "react-icons/fa";
import { NavLink, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Sidebar({ children }) {
    const Name = sessionStorage.getItem('myName');
    const MyRole = sessionStorage.getItem('myRole')
        const menuItem = [
            {
                path: "/dashboard",
                name: "Dashboard",
                icon: <FaBookReader />
            },
            {
                path: "/add/product",
                name: "Add Product",
                icon: <FaRegEdit />
            },
            {
                path: "/product/issued",
                name: "Issued Product",
                icon: <FaRegFileAlt />
            },
            {
                path: "/admin",
                name: "Admin",
                icon: <FaUserSecret />
            }

        ]
        const menuItem1 = [
            {
                path: "/dashboard",
                name: "Dashboard",
                icon: <FaBookReader />
            },{
                path: "/detail/cart",
                name: "Cart",
                icon: <FaShoppingCart />
            }
        ]

    return (
        <div className="sid-container">

            <div className="sidebar">
                <div className="top_section">
                    <div className="icon"><FaVolleyballBall /></div>
                    <div className="link d-none d-sm-inline">Equipement Rental App </div>
                </div>
                {MyRole==="admin" ?
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link text-deactron" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="ms-3 d-none d-sm-inline">{item.name}</div>
                        </NavLink>
                    )) :    menuItem1.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link text-deactron" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="ms-3 d-none d-sm-inline">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>

            <main>
                <NavScrollExample
                    title={Name}
                />
                {children}
                <Footer />
            </main>

        </div>
    );
};

export default Sidebar;

export function NavScrollExample({ title }) {
    const MyRole = sessionStorage.getItem('myRole')
    function filtered() {
        console.log("clicked");

    }
    function logout() {
        sessionStorage.clear();
        history.push("/login")
    }
    function adminlogin(){
        if(MyRole==="admin"){
            alert("You are Admin")
        }else{
            sessionStorage.clear();
            history.push("/login")
        }
    }
    const history = useHistory()
    return (
        <div>
            <Navbar className="nav-clr" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" style={{ color: "black", fontSize: "30px",fontStyle:"italic" }} className="title"><div className="icon"></div><FaUserCircle />{title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <button class="btn btn-info me-2" type="button" onClick={() => history.push("/dashboard")}><div className="icon"></div><FaHome />Home</button>
                            {MyRole ==="user" ?
                            <button class="btn btn-warning me-2" type="button" onClick={() => history.push("/detail/cart")}> <div className="icon"></div><FaShoppingCart />cart</button>: ""
                            }
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"

                            />
                            <Button class="btn btn-outline-warning me-2" onClick={() => filtered()}>Search</Button>
                        </Form> */}
                        <button class="btn btn-warning me-2" type="button" onClick={()=>logout()}><div className="icon"></div><FaSignOutAlt />Logout</button>
                        < button class="btn btn-info me-2" type="button" onClick={()=>adminlogin()} >Admin Login</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export function Footer() {
    return (
        <div>
            <footer>
                Contact Us
                <div>Email : rentalappsree@gmail.com</div>
                <div>Phone : 90******11</div>
            </footer>
        </div>
    )
} 
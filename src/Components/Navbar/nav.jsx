import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import styles from './nav.module.css'


export const NavComp = () => {
    return (
        <>
            <Navbar expand='lg' className={styles.nav_bg}>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={require('../../Assets/images/logo.png')}
                            width='100px'
                            height='40px'
                            alt="brand Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Navbar.Text>
                                <Link to='/' className='linkStyle'>
                                    Home
                                </Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Link className='linkStyle' to='/habits'>
                                    Habits
                                </Link>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}
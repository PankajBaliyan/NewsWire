import React, { useState } from 'react'
// import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';

const NavBar = () => {
    const [showNavColor, setShowNavColor] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' className='mb-3' dark bgColor='dark' style={{ backgroundColor: '#e3f2fd' }}>
                <MDBContainer fluid>
                    <MDBNavbarBrand href={'/'}>NewsWire</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColor(!showNavColor)}
                    >+
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColor} navbar>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page' href={'/'}>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <LinkContainer to={'/news/new'}>
                                    <MDBNavbarLink href={'#'}>NewNews</MDBNavbarLink>
                                </LinkContainer>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <LinkContainer to={'/contact'}>
                                    <MDBNavbarLink href={'/contact'}>Contact</MDBNavbarLink>
                                </LinkContainer>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}

export default NavBar

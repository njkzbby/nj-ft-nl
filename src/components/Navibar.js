import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Link, Button, Form } from 'react-bootstrap';
import './Navibar.scss';



export default function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="LogoName">NJFTNL</Navbar.Brand>
            </Navbar>
        </>
    )
}

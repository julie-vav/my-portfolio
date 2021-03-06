import React from "react"
import { Link } from "gatsby"
import { StyledHeader } from "../styles/styled-components" 


const Header = (props) => (
    <StyledHeader>
        <h1>
            <Link to="/">
            Julia JS
            </Link>
        </h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    </StyledHeader>
)

export default Header 
import React from 'react'
import {styled} from 'styled-components'
import logo from "../images/logo.png"
const Navbar = () => {
  return (
    <DIV>
        <LOGO>
            <img src={logo} alt="" />
            <h1>Nexcent</h1>
        </LOGO>
        <LINKS>
            <a href="/">Home</a>
            <a href="/">Service</a>
            <a href="/">Feature</a>
            <a href="/">Product</a>
            <a href="/">Testimonial</a>
            <a href="/">FAQ</a>
        </LINKS>
        <BUTTONS>
           <LOGIN> <button>Login</button></LOGIN>
           <SIGNUP> <button>Sign up</button></SIGNUP>
        </BUTTONS>
    </DIV>
  )
}

export default Navbar

const DIV=styled.div`
display: flex;
justify-content: space-around;
align-items: center;

h1{
    color: #263238;
}
h1:hover{
    cursor: pointer;
}
a{
    text-decoration: none;
    color: #1c1e1f;
    font-size: 20px;
}

`

const LOGO=styled.div`
    display: flex;
    /* border: 1px solid red; */
    align-items: center;
    img{
        width: 100%;
        height: fit-content;
        /* border: 1px solid red; */
    }
`
const LINKS=styled.div`
    display: flex;
    /* border: 1px solid red; */
    width: 50%;
    justify-content: space-around;
    a:hover{
        text-decoration-line: underline;
    }
`
const BUTTONS=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10%;
    button{
        font-size: 20px;
    }
    button:hover{
        cursor: pointer;
    }
`
const LOGIN=styled.div`
    button{
        color: green;
        border: none;
        background:none;        
    }
`
const SIGNUP=styled.div`
    button{
        color: whitesmoke;
        border: none;
        background-color: #43A046;
        font-size: medium;
        padding: 10px;
        border-radius: 4px;
    }
`

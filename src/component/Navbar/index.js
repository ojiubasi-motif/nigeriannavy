import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Wrapper,Menu,Close, NavbarContainer,MenuIcon} from './NavbarElements'
import Logo from  '../logo/navylogo3.png'
import {Button} from '../Button';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false)

    const showButton=()=>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <>
            <Wrapper>
                <NavbarContainer>
                    <Link to='/' className="Logo">
                        <img src={Logo}/>
                    </Link>
                    <MenuIcon onClick={handleClick}>
                        {click? <Menu/>:<Close/>}
                    </MenuIcon>
                    <ul className={click? "nav-menu active": "nav-menu"}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register' className="nav-links" onClick={closeMobileMenu}>
                                Recruitment
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to='/blog' className="nav-links-mobile" onClick={closeMobileMenu}>
                                 Blog
                            </Link>
                        </li> */}
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>Register</Button>} */}
                </NavbarContainer>
            </Wrapper>
        </>
    )
}

export default Navbar

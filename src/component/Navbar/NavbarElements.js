import styled from 'styled-components'
import {BiMenu} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'


export const Wrapper = styled.nav`
    background-color:white;
    height: 12vh;
    width:vw;
    margin-top:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    box-shadow: 5px 2px 10px rgb(77, 67, 165);
    position: sticky;
    top: 0;
    z-index: 999;
    
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
   max-width: 1500px;
    width:90vw;
    .Logo{
        justify-self: start;
        margin-left: 10px;
        cursor: pointer;
        width:70px;
        display: flex;
        align-items: center;
        img{
            height:100%;
            width:100%
        }
    }

    .nav-menu {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 10px;
        list-style: none;
        text-align: center;
        width: 60vw;
        justify-content: end;
        margin-right: 2rem;
      }
      .nav-item {
        height: 100%;
      }
      .nav-links {
        // color: #fff;
        color: rgb(42, 27, 179);
        display: flex;
        font-weight: bold;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 1rem;
        height: 100%;
      }
      .nav-links:hover {
        border-bottom: 3px solid #ffc500;
        // transition: all 0.2s ease-out;
      }
`;

export const MenuIcon = styled.div`
  display: none;
`;
export const Menu = styled(BiMenu)`

`;
export const Close = styled(MdClose)`

`;
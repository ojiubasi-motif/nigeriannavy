/*
    const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);
*/ 
import styled from 'styled-components'

export const StyledButton = styled.button`
     :root{
        //  --primary:#fff;
     }   

     .btn{
         padding:8px 20px;
         border-radius:2px;
         outline:none;
         border:none;
         cursor:pointer
     }

     .btn--primary{
        //  background-color: var(--primary);
         color:#242424;
         border:1px solid var(--primary);
     }
     .btn--outline{
         background-color:transparent;
         color:#fff;
         padding:8px 20px;
         border:1px solid var(--primary);
         transition:all 0.3s ease-out;
     }
     .btn--medium{
         padding:8px 20px;
         font-size:20px
     }
     .btn--large{
         padding:12px 26px;
         font-size:20px;
     }
     .btn--medium:hover, btn--large:hover{
        background:#fff;
         color:#242424;
         transition:all 0.3s ease-out;
     }
`;
import styled from 'styled-components'

// export const FormWrapper = styled.div`
    
//     height:60vh;
//     max-height:auto;
//     margin:0 auto;
//     margin-top:2vh;
// `;
export const Heading = styled.div`
    width:100vw;  
    display:flex;
    justify-content:space-around;  
    padding:1rem auto;
`;
export const FormWrapper = styled.div`
    min-height:60vh;
    margin:30px auto;
    width:600px;
    max-width:auto;
    padding:1rem;
    text-align:center;
    span{
        width:100%;
        display:flex;
        justify-content:space-around
    }
    .btn{
        min-width:7rem !important;
        color:white !important;
        width: auto !important;
        
    }
`;

export const ItemList = styled.div`
padding:1rem;
min-height:60vh;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 1em;
margin:10px auto;
margin-bottom:0;
padding-bottom:0;
    span{
        margin-top:0;
        padding-top:0
        width:100%;
        display:flex;
        align-items:center;
        // justify-content:space-around;
        .value{
            color:gray;
            margin-left:10px;
        }
    }
`;
export const BtnWrapper = styled.span`
margin-top:0;
padding-top:0
width:100%;
display:flex;
justify-content:space-around;
.btn{
    min-width:7rem !important;
    color:white !important;
    width: auto !important;
    
};
`;
// export const FeatureButton = styled.button`
//     font-size:1.4rem;
//     padding:0.6rem 3rem;
//     border:none;
//     background:#ffc500;
//     color:#000;
//     transition:0.2s ease-out;

//     &:hover{
//         color:#fff;
//         background:#e31837;
//         transition:0.2s ease-out;
//         cursor:pointer;
//     }
// `;
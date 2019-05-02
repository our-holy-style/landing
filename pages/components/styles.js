import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const ModalContainer = styled.div`
    width: auto;
    height: 500px;
    background: #840e5b;
    display: flex;
    color: #fff;
    align-items: center;
    padding: 40px 15px;
    text-align: center;
    flex-direction: column;
    ${breakpoint('desktop')`
        width: 900px;
        padding: 40px;
    `}    
    `;

const ModalLogo = styled.img`
    width: 180px;
`;

const FormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(45px, auto);
    width: 100%;
    label{
        font-family: NeueMontreal;
        font-size: 18px;
        text-align: right
    }
    input, select{
        height: 26px;
        color: #666;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        padding: 4px 10px
    }
    select{
        background: #fff;
        height: 33px;
    }
    button{
        background: #fbb24a;
        color:#514e4b;
        width: 113px;
        border: none;
        border-radius: 16px;
        font-size: 18px;
        font-family: NeueMontreal;
        font-weight: 900;
        grid-column: 1/3;
        margin: 0 auto;
        cursor: pointer;
        ${breakpoint('desktop')`
        grid-column: 2/2;
    `}    
    }
    ${breakpoint('desktop')`
        width: 624px;
        label{
            font-size:20px;
        }
`}  
`

export { ModalContainer, ModalLogo, FormContainer };
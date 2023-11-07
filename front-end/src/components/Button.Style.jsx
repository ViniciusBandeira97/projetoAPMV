import styled from 'styled-components'

/* Estilo + fonte + efeito Hover / para os botãos de escolha */
export const ChoiceButton = styled.button`
    background: #111933;
    width: 320px;
    height: 109px;
    border-radius: 24px;
    border: 3px solid #003BFF;
    color: #FFF;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 20px;
    &:hover{
        background: #2349C7;
        border: 3px solid #F90;
    }
`
/**------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------- */
/* Conteiner do botão + estilo + efeito Hover / para os botãos do Menu */
export const MenuButton = styled.button`
    background: ${(prop) => prop.onecolor}; /** É passado cor RGB via propriedades  */
    display: flex;
    width: 226px;
    height: 59px;
    border-radius: 24px;
    border: 3px solid #003BFF;
    margin-bottom: 25px;
    &:hover{
        background: ${(prop) => prop.twocolor}; /** É passado cor RGB via propriedades  */
        border: 3px solid #F90;
    }
`
/* Conteiner do texto + Font / para os botãos do Menu */
export const MenuText = styled.h1 `
    padding-top: 11.50px;
    width: 100%;
    height: 36px;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
`
/**------------------------------------------------------------------------------------------------- */
/**---------------Estilo + fonte + efeito Hover / para os botãos de decisão------------------------- */
export const DecisionButton = styled.button`
    background: ${(prop) => prop.onecolor}; /** É passado cor RGB via propriedades  */
    width: 156.696px;
    height: 53.375px;
    margin: 15px;
    border-radius: 24px;
    border: 3px solid #003BFF; 
    color: #FFF;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    &:hover{
        background: ${(prop) => prop.twocolor}; /** É passado cor RGB via propriedades  */
        border: 3px solid #F90;
    }
`
export const DivDB = styled.div `
    padding-top: 40px;
    width: 100%;  
    height: 157px;
`

/* Estilo + fonte + efeito Hover / para os botão de retornar */
export const ReturnMenuButton = styled.button`
    background: #00385F;
    width: 226px;
    height: 59px;
    border-radius: 24px;
    border: 3px solid #003BFF;
    color: #FFF;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    &:hover{
        background: #0F83D4;
        border: 3px solid #F90;
    }
`
export const ChoiceDiv = styled.div`
    padding-top: 130px;    
`
export const MenuDiv = styled.div`
    padding-top: 45px;    
`
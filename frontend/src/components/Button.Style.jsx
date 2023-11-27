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
    font-size: 28px;
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
export const MenuButtonNewTest = styled.button`
    background: #34A853; 
    display: flex;
    width: 276px;
    height: 74px;
    border-radius: 24px;
    border: 3px solid #003BFF;
    margin-bottom: 25px;
    &:hover{
        background: #4CE073;
        border: 3px solid #F90;
    }
`
export const MenuButtonHistoric = styled.button`
    background: #F49505; 
    display: flex;
    width: 276px;
    height: 74px;
    border-radius: 24px;
    border: 3px solid #003BFF;
    margin-bottom: 25px;
    &:hover{
        background: #FFCA7A; 
        border: 3px solid #F90;
    }
`
export const MenuButtonChoiceVehicle = styled.button`
    background: #00385F;
    display: flex;
    width: 276px;
    height: 74px;
    border-radius: 24px;
    border: 3px solid #003BFF;
    margin-bottom: 25px;
    &:hover{
        background: #0076C8;
        border: 3px solid #F90;
    }
`
export const MenuButtonDelete = styled.button`
    background: #CB0000; 
    display: flex;
    width: 276px;
    height: 74px;
    border-radius: 24px;
    border: 3px solid #003BFF;
    margin-bottom: 25px;
    &:hover{
        background: #FF2E2E;
        border: 3px solid #F90;
    }
`
/* Conteiner do texto + Font / para os botãos do Menu */
export const MenuText = styled.h1 `
    padding-top: 15px;
    width: 100%;
    height: 100%;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
`
/**------------------------------------------------------------------------------------------------- */
/**---------------Estilo + fonte + efeito Hover / para os botãos de decisão------------------------- */
export const DecisionButtonYes = styled.button`
    background: #007B21; 
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
        background: #00C735;
        border: 3px solid #F90;
    }
`
export const DecisionButtonNo = styled.button`
    background: #FFB904; 
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
        background: #B18000; 
        border: 3px solid #F90;
    }
`
export const DecisionButtonCancelar = styled.button`
    background: #CB0000; 
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
        background: #FF0000; 
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
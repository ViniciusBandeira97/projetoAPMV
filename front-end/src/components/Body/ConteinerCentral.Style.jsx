import styled from "styled-components"
/**------------------------------------------------------------------------------------------------- */
/**---------------------Estilo para Body da Pagina principal de LOGIN------------------------------- */
export const BodyLoginPage = styled.body`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

/**------------------------------------------------------------------------------------------------- */
/**---------------------Estilo para Body padrão das Paginas----------------------------------------- */
export const CabContainer = styled.div `
    margin-top: 5px;
    width: 562px;
    height: 140px;
    border-radius: 16px 16px 0px 0px;
    background: #00385F;
    border-left: 5px solid #000;
    border-right: 5px solid #000;
    border-top: 5px solid #000;
    border-bottom: 5px solid #111933;
    @media(max-width: 1370px){
        width: 490px;
        height: 90px;
    }
`
export const BodyContainer = styled.div `
    width: 562px;
    height: 686px;
    border-radius: 0px 0px 16px 16px;
    border-left: 5px solid #000;
    border-right: 5px solid #000;
    border-bottom: 5px solid #000;
    background: #DDD;
    @media(max-width: 1370px){
        width: 490px;
        height: 450px;
    }
`
export const TitleDiv = styled.div `
    width: 562px;
    height: 151px;
    display: flex;
    @media(max-width: 1370px){
        width: 502px;
        height: 90px;
    }    
`
export const ImgDiv = styled.div `
    padding-top: 60px;
    padding-left: 280px;
    position: absolute;
    @media(max-width: 1370px){
        padding-top: 37px;
        padding-left: 245px;
    }
`
export const ImgTam = styled.img`
    width: 78px;
    height:66px;
    @media(max-width: 1370px){
        width: 54px;
        height:43px;
    }
`
export const TitleText = styled.h1 `
    padding-top: 15px;
    padding-left: 130px;
    width: 440px;
    height: 96px;
    text-indent: 10px;
    text-align: justify;
    color: #FFF;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media(max-width: 1370px){
        font-size: 30px;
        padding-top: 7px;
        width: 360px;
        padding-left: 140px;
        text-indent: 10px;
    }
`
export const ConteinerDiv = styled.div `
    background: #9ec1da;
    margin-top: 5px;
    width: 457px;
    height: 610px;
    border: 2px solid #000;
`
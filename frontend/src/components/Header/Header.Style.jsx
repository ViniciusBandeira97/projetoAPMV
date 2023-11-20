import styled from "styled-components";

/**------------------------------------------------------------------------------------------------- */
/**---------------------Estilo para Header da Pagina principal de LOGIN----------------------------- */
export const HeaderLoginPage = styled.div`
    width: 100%;    
    height: 354px;
    padding-top: 51px;
    background: #012239;
`
export const TitleLoginPage = styled.h1`
    width: 100%;
    height: 74px;
    // ---FONTE DESIGN---- 
    color: #FFF;
    font-family: Inter;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
`
export const DivImgLoginPage = styled.div`
    width: 100%;
    height: 140px;
    padding-top: 19px;
`
export const ImgLoginPage = styled.img `
    width: 240px;
    height: 84px;
`
export const Container1LoginPage = styled.div`
    width: 415px;
    height: 535px;
    border-radius: 60px;
    background: #FFF;
`
/**------------------------------------------------------------------------------------------------- */
/**---------------------Estilo para Header padrão de todas as paginas------------------------------- */
export const StyleHeader = styled.div`
    width: 100%;
    height: 111px;
    background: #012239;
    border-bottom: 2px solid #7700ff;
    display:flex;
    justify-content: space-between;

    @media (max-width: 1370px) {
        height: 90px;
    }
`
export const HeaderTitleDiv = styled.div `
    height: 100%;
    display: flex;
`
export const ImageCarDiv = styled.div`
    padding-top: 10px;
    height: 100%;
    flex-direction: column; /* Define a direção da coluna para elementos filhos */
    display: block;
    
    @media (max-width: 1370px){
       
    }
`
export const ImgCar = styled.img `
    width: 135px;
    height: 52px;
    @media (max-width: 1370px) {
        width: 110px;
        height: 42px;
    }    
`
export const DivExit =styled.div`
    height: 100%;
    display: flex;
`
export const Title = styled.h1`
    color: #FFF;
    font-family: Inter;
    font-size: 40px;
    font-weight: 700;
    padding-top: 25px;
    text-indent: 15px;

    @media (max-width: 1370px) {
        font-size: 30px;
    }
`


export const CenterTitle = styled.h1`
    padding-top: 05px;
    flex-direction: column;
    text-align: center;
    color: #FFF;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 1370px) {
        font-size: 20px;
    }    
`
export const Exit = styled.h1 `
    padding-top: 10px;
    padding-left: 140px;
    color: #FBBC05;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &:hover{
    color: #fb0505;
    }
    @media (max-width: 1370px){
        padding-top: 10px;
        font-size: 24px;
    }
`
export const UserProfile = styled.div `
    margin-top: 10px;
    display: flex; 
`
export const ElementText = styled.div `
    margin-top: 10px;
    flex-direction: column; /* Define a direção da coluna para elementos filhos */
    display: block;
`
export const ElementImageURL = styled.img `
    margin-right: 10px;
    border-radius: 50%; 
    width: 50px;
    height: 50px;
`
export const ElementName = styled.h2 `
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
`
export const ElementEmail = styled.h2 `
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    font-size: 10px;
`
import styled from "styled-components";

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
    padding-right: 230px;
    padding-top: 10px;
    height: 100%;
    flex-direction: column; /* Define a direção da coluna para elementos filhos */
    display: block;
    
    @media (max-width: 1370px){
       padding-right: 130px;
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
export const ImgCar = styled.img `
    width: 135px;
    height: 52px;
    @media (max-width: 1370px) {
        width: 110px;
        height: 42px;
    }    
`
export const Exit = styled.h1 `
    padding-top: 70px;
    padding-right: 10px;
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
        padding-top: 50px;
        font-size: 24px;
    }
`
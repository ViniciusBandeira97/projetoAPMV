import { CenterTitle, DivExit, Exit, HeaderTitleDiv, ImageCarDiv, ImgCar, StyleHeader, Title } from "./Header.Style"

function HeaderGlobal() {
    return (
        <>
            <StyleHeader>
                <HeaderTitleDiv>
                    <Title>Projeto APMV</Title>
                </HeaderTitleDiv>
                <ImageCarDiv>
                    <ImgCar src="./images/car.png" />
                <CenterTitle>Bem Vindo!</CenterTitle>
                </ImageCarDiv>
                    <DivExit>
                    <Exit>Sair</Exit>
                </DivExit>
            </StyleHeader>
        </>
    )
}
export default HeaderGlobal
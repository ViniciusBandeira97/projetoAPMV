import { Body } from '../../components/Body.Style'
import { BodyContainer, CabContainer, ImgDiv, TitleDiv, TitleText } from '../../components/ConteinerCentral.style'
import { CenterTitle, Exit, ImgCar, StyleHeader, Title, ImageCarDiv } from '../../components/Header.Style'
import { ParagraphMenu, VariableCar } from '../../components/TextFormatting.Style'
import { MenuButton, MenuDiv, MenuText } from '../../components/Button.style'

function index() {

  return (
    <>
      <StyleHeader>
        <Title>Projeto APMV</Title>
        <ImageCarDiv>
          <ImgCar src="./images/car.png" />
          <CenterTitle>Bem Vindo!</CenterTitle>
        </ImageCarDiv>
        <Exit>Sair</Exit>
      </StyleHeader>
      <Body>
        <center>
          <CabContainer>
            <TitleDiv>
              <TitleText> Teste de bateria veicular</TitleText>
              <ImgDiv>
                <img src="./images/Bateria.png" width={78} height={66} />
              </ImgDiv>
            </TitleDiv>

          </CabContainer>    
          <BodyContainer>
            <VariableCar>MARCA</VariableCar>
            <VariableCar>MODELO</VariableCar>
            <ParagraphMenu>Opções:</ParagraphMenu>
                <MenuDiv>
                    <MenuButton onecolor='#34A853' twocolor='#4CE073'><MenuText>Novo Teste</MenuText></MenuButton>
                    <MenuButton onecolor='#F49505' twocolor='#FFCA7A'><MenuText>Histórico</MenuText></MenuButton>
                    <MenuButton onecolor='#00385F' twocolor='#0076C8'><MenuText>Trocar Veículo</MenuText></MenuButton>
                    <MenuButton onecolor='#CB0000' twocolor='#FF2E2E'><MenuText>Excluir veículo</MenuText></MenuButton>
                </MenuDiv>
              
          </BodyContainer>
        </center>
      </Body>

    </>
  )
}

export default index
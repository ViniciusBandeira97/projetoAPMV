import { Body } from '../../components/Body.Style'
import { BodyContainer, CabContainer, ImgDiv, TitleDiv, TitleText } from '../../components/ConteinerCentral.style'
import { CenterTitle, Exit, ImgCar, StyleHeader, Title, ImageCarDiv } from '../../components/Header.Style'
import { Paragraph } from '../../components/TextCentral.Style'
import {ChoiceButton, ChoiceDiv } from '../../components/Button.style'

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
            <Paragraph>Click nas opções abaixo para prosseguir...</Paragraph>
              <ChoiceDiv>
                <ChoiceButton>Selecionar veículo</ChoiceButton>
                <ChoiceButton>Cadastrar novo veículo</ChoiceButton>
              </ChoiceDiv>
              
          </BodyContainer>
        </center>
      </Body>

    </>
  )
}

export default index
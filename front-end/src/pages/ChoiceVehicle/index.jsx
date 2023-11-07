import { Body } from '../../components/Body.Style'
import { BodyContainer, CabContainer, ImgDiv, TitleDiv, TitleText } from '../../components/ConteinerCentral.style'
import { ParagraphChoice } from '../../components/TextFormatting.Style'
import {ChoiceButton, ChoiceDiv } from '../../components/Button.style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'

function index() {

  return (
    <>
    <HeaderGlobal />
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
            <ParagraphChoice>Click nas opções abaixo para prosseguir...</ParagraphChoice>
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
import { Body } from '../../components/Body.Style'
import { BodyContainer, CabContainer, ImgDiv, TitleDiv, TitleText, ConteinerDiv } from '../../components/ConteinerCentral.style'
import { ParagraphCRUD } from '../../components/TextFormatting.Style'
import { DecisionButton, DivDB } from '../../components/Button.style'
import { Idiv, IdivDesc, Input, InputDesc } from '../../components/Input.Style'
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
            <h1>Veículo</h1>
            
              <ConteinerDiv>
                  <ParagraphCRUD>*Marca:</ParagraphCRUD>
                    <Idiv>
                      <Input type ="text" name="marca"/>
                    </Idiv>
                  <ParagraphCRUD>*Modelo:</ParagraphCRUD>
                    <Idiv>
                      <Input type ="text" name="marca"/>
                    </Idiv>
                  <ParagraphCRUD>*Ano:</ParagraphCRUD>
                    <Idiv>
                      <Input type ="text" name="marca"/>
                    </Idiv>
                  <ParagraphCRUD>*Placa:</ParagraphCRUD>
                    <Idiv>
                      <Input type ="text" name="marca"/>
                    </Idiv>
                  <ParagraphCRUD>Descrição (Opcional:)</ParagraphCRUD>
                    <IdivDesc>
                      <InputDesc type ="text" name="marca"/>
                    </IdivDesc>
                    <DivDB>
                      <DecisionButton onecolor='#CB0000' twocolor='#FF0000'>Cancelar</DecisionButton>  
                      <DecisionButton onecolor='#007B21' twocolor='#00C735'>Salvar</DecisionButton>
                    </DivDB>
              </ConteinerDiv>
          </BodyContainer>

        </center>
      </Body>

    </>
  )
}

export default index
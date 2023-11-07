import { Body } from '../../components/Body.Style'
import { DecisionButton, DivDB } from '../../components/Button.style'
import { BodyContainer, CabContainer, ImgDiv, TitleDiv, TitleText } from '../../components/ConteinerCentral.style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
import { DivDescision, DivHistoric, DivTitle, ParagraphDescision, ParagraphHistoric, TitleHistoric, VariableCar } from '../../components/TextFormatting.Style'


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
            <VariableCar>MARCA</VariableCar>
            <VariableCar>MODELO</VariableCar>
            
            <DivTitle>
                <TitleHistoric>Histórico:</TitleHistoric>
            </DivTitle>
            
            <DivHistoric>
                <ParagraphHistoric> Tem certeza que você deseja excluir
                todo o histórico de testes de sua bateria, esta opção 
                é ideal apenas quando você efetuar a substituição de sua 
                bateria por uma nova ?   
                </ParagraphHistoric>
            </DivHistoric>
            <DivDescision>
                <ParagraphDescision>
                    Sim: para prosseguir
                </ParagraphDescision>
                <ParagraphDescision>
                  Não: para desistir
                </ParagraphDescision>
            </DivDescision>

            <DivDB>
                <DecisionButton onecolor='#FFB904' twocolor='#B18000'>NÃO</DecisionButton>
                <DecisionButton onecolor='#007B21' twocolor='#00C735'>SIM</DecisionButton>
            </DivDB>  
          </BodyContainer>
        </center>
      </Body>

    </>
  )
}

export default index
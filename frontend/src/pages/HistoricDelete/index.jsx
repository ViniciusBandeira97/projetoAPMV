
import { DecisionButton, DivDB } from '../../components/Button.style'
import { BodyContainer} from '../../components/Body/ConteinerCentral.Style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
import { DivDescision, DivHistoric, DivTitle, ParagraphDescision, ParagraphHistoric, TitleHistoric, VariableCar } from '../../components/TextFormatting.Style'
import BodyGlobal from '../../components/Body/BodyGlobal'


function index() {

  return (
    <>
     <HeaderGlobal />
      <BodyGlobal/>
        <center>
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
    </>
  )
}

export default index
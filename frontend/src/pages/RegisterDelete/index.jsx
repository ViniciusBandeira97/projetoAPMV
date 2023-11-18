import { DecisionButton, DivDB } from '../../components/Button.style'
import { BodyContainer} from '../../components/Body/ConteinerCentral.Style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
import { DivDescision, DivRegister, DivTitle, ParagraphDescision, ParagraphHistoric, TitleHistoric, VariableCar } from '../../components/TextFormatting.Style'
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
                    <TitleHistoric>Cadastro:</TitleHistoric>
                </DivTitle>
                
                <DivRegister>
                    <ParagraphHistoric>  Tem certeza que deseja excluir o cadastro desse veículo
                        e consequentemente todo o histórico de testes ?
                    </ParagraphHistoric>
                </DivRegister>
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
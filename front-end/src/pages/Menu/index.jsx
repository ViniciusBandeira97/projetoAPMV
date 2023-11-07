import { BodyContainer} from '../../components/Body/ConteinerCentral.Style'
import { ParagraphMenu, VariableCar } from '../../components/TextFormatting.Style'
import { MenuButton, MenuDiv, MenuText } from '../../components/Button.style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
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
                <ParagraphMenu>Opções:</ParagraphMenu>
                    <MenuDiv>
                        <MenuButton onecolor='#34A853' twocolor='#4CE073'><MenuText>Novo Teste</MenuText></MenuButton>
                        <MenuButton onecolor='#F49505' twocolor='#FFCA7A'><MenuText>Histórico</MenuText></MenuButton>
                        <MenuButton onecolor='#00385F' twocolor='#0076C8'><MenuText>Trocar Veículo</MenuText></MenuButton>
                        <MenuButton onecolor='#CB0000' twocolor='#FF2E2E'><MenuText>Excluir veículo</MenuText></MenuButton>
                    </MenuDiv>
            </BodyContainer>
        </center>     
    </>
  )
}

export default index
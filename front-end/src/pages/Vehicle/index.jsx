import { Body } from '../../components/Body.Style'
import { BodyContainer, CabContainer, ImgDiv, TitleDiv, TitleText } from '../../components/ConteinerCentral.style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'

function App() {

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
              
          </BodyContainer>
        </center>
      </Body>

    </>
  )
}

export default App
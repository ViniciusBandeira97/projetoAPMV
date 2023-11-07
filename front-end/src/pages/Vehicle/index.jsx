import BodyGlobal from '../../components/Body/BodyGlobal'
import { BodyContainer, CabContainer, ImgDiv, TitleDiv, TitleText } from '../../components/Body/ConteinerCentral.Style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'

function App() {

  return (
    <>
      <HeaderGlobal />
      <BodyGlobal/>
        <center>
            <BodyContainer>
              <CabContainer>
                <TitleDiv>
                  <TitleText> Teste de bateria veicular</TitleText>
                  <ImgDiv>
                    <img src="./images/Bateria.png" width={78} height={66} />
                  </ImgDiv>
                </TitleDiv>

              </CabContainer>    
            </BodyContainer>
        </center>     
    </>
  )
}

export default App
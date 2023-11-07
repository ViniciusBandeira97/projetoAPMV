import { CabContainer, ImgDiv, TitleDiv, TitleText, ImgTam} from './ConteinerCentral.Style'

function BodyGlobal() {

  return (
    <>
        <center>
          <CabContainer>
            <TitleDiv>
              <TitleText> Teste de bateria veicular</TitleText>
              <ImgDiv>
                <ImgTam src="./images/Bateria.png"/>
              </ImgDiv>
            </TitleDiv>
          </CabContainer>    
        </center>
    </>
  )
}

export default BodyGlobal
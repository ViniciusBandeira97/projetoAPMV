import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google'
import { HeaderLoginPage, DivImgLoginPage, TitleLoginPage, ImgLoginPage, Container1LoginPage} from '../../components/Header/Header.Style';
import { DivTextAlert, DivTextLeft, DivTextRight, ParagraphAlert, ParagraphLeftSobre, ParagraphLoginSocial, ParagraphRightSobre, TextSingIN, TitleLeftSobre, TitleTextAlert, TitleTextLoginSocial } from '../../components/TextFormatting.Style';
import { BodyLoginPage } from '../../components/Body/ConteinerCentral.Style';



function index() {
  const handleLoginSuccess = (response) => {
   // Aqui, você pode lidar com a resposta do login bem-sucedido.
    console.log('Login success:', response);
   // Redirecione para a próxima página
  };

  const handleLoginFailure = (error) => {
    console.error('Login failure:', error);
    // Trate o erro de login, se necessário.
  };
  return (
    <> 
      <HeaderLoginPage>
        <TitleLoginPage>PROJETO APMV</TitleLoginPage>
        <DivImgLoginPage><center><ImgLoginPage src="./images/car.png" /></center></DivImgLoginPage>
          <center><Container1LoginPage>
            <TitleTextLoginSocial>Bem Vindo!</TitleTextLoginSocial>
            <ParagraphLoginSocial> Escolha um método de entrada:</ParagraphLoginSocial>
            <TextSingIN>Sing In</TextSingIN>
              <GoogleOAuthProvider>
                        <GoogleLogin client_id="642597703339-9lqgmjs2gu7ij2ao7vk8sk1i7t4hkh1a.apps.googleusercontent.com" width={"250px"} height={"200px"} >
                          onSuccess={handleLoginSuccess}
                          onFailure={handleLoginFailure}
                        </GoogleLogin>
              </GoogleOAuthProvider>    
          </Container1LoginPage></center>
      </HeaderLoginPage>

      <BodyLoginPage>          
        <DivTextLeft>
          <TitleLeftSobre>SOBRE:</TitleLeftSobre>
          <ParagraphLeftSobre>
            Nossa tecnologia permite você checar a saúde da bateria do seu veiculo.
          </ParagraphLeftSobre>
          <ParagraphLeftSobre>
              Fazemos uso de analise preditiva com aprendizado de máquina aplicado IA, 
            proporcionando os melhores resultados.
          </ParagraphLeftSobre>
        </DivTextLeft>
        
        <DivTextRight>
          <ParagraphRightSobre>
            Faça seu Login e teste, agora mesmo!
          </ParagraphRightSobre>
        </DivTextRight>
      </BodyLoginPage>
      
      <center><DivTextAlert>
        <TitleTextAlert>Atenção:</TitleTextAlert>
        <ParagraphAlert>
          É necessário o uso de Scanner ELM 327 conectado via porta OBD-II do seu veículo.
        </ParagraphAlert>
      </DivTextAlert></center>
    </>
  )
}

export default index

import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import { HeaderLoginPage, DivImgLoginPage, TitleLoginPage, ImgLoginPage, Container1LoginPage} from '../../components/Header/Header.Style';
import { DivTextAlert, DivTextLeft, DivTextRight, ParagraphAlert, ParagraphLeftSobre, ParagraphLoginSocial, ParagraphRightSobre, TextSingIN, TitleLeftSobre, TitleTextAlert, TitleTextLoginSocial } from '../../components/TextFormatting.Style';
import { BodyLoginPage } from '../../components/Body/ConteinerCentral.Style';
import {jwtDecode} from 'jwt-decode'
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";



const SingIn = () => {
  const [Email, setEmail] = useState('');
  const [ImageURL, setImageURL] = useState('');
  const [Name, setName] = useState('');
  const [redirecionar, setRedirecionar] = useState(false); //Após envio bem-sucedido para o Backend_ Função volta a pagina anterior

  const navigate = useNavigate();

  const handleLoginSuccess = (responseGoogle) => {
    if (responseGoogle.credential != null) {
      const USER_CREDENTIAL = jwtDecode(responseGoogle.credential);

      // Atualizar estados com os valores do USER_CREDENTIAL
      setEmail(() => USER_CREDENTIAL.email);
      setImageURL(() =>USER_CREDENTIAL.picture);
      setName(() => USER_CREDENTIAL.name);

      console.log('Nome:', USER_CREDENTIAL.name);
      console.log('E-mail:', USER_CREDENTIAL.email);
      console.log('URL da Imagem:', USER_CREDENTIAL.picture);
    }
  };

  const handleLoginFailure = (error) => {
    //Erro de Login
    console.error('Login failure:', error);
  };

  const enviarParaBackend = useCallback (async () => {
    try {
        const resposta = await fetch ('http://localhost:3000/api/userR', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Email,
            ImageURL,
            Name,
          }),
        });
        const dados = await resposta.json();
        console.log('CadLogin backend:', dados); 
        
        // Configurar o estado para redirecionar
        setRedirecionar(true);
      } catch (error) {
      console.error('Erro no enviar para o backend:', error);
      }
  }, [Email, ImageURL, Name]); 

  const verificarEmailNoBackend = useCallback (async () => {
    try {
      const resposta = await fetch(`http://localhost:3000/api/userR/${Email}`);
      const dados = await resposta.json();
  
      if (dados.emailExistente) {
        console.log('E-mail já cadastrado no banco de dados.');
        // Lógica para lidar com o e-mail já existente, se necessário
        // Configurar o estado para redirecionar
        setRedirecionar(true); 
        
      } else {
        console.log('E-mail não cadastrado no banco de dados. Prossiga com o cadastro.');
        // Lógica para prosseguir com o cadastro normal
        await enviarParaBackend();// Aguardar o envio para o backend antes de prosseguir
      }
    } catch (error) {
      console.error('Erro ao verificar o e-mail no backend:', error);
    }
  },[ Email, enviarParaBackend]);

  useEffect(() => {
    // Chamar verificarEmailNoBackend somente quando Email, ImageURL e Name forem atualizados
    if (Email && ImageURL && Name) {
      verificarEmailNoBackend();
    }
  }, [verificarEmailNoBackend, Email, ImageURL, Name]);

  useEffect(() => {
    // Se redirecionar for true, execute a ação após 1/2 segundos
    if (redirecionar) {
      const timeoutId = setTimeout(() => {
        navigate("/select", {
          state:{Email, ImageURL, Name},
        });
      }, 500);

      // Limpar o timeout se o componente for desmontado antes do tempo limite
      return () => clearTimeout(timeoutId);
    }
  }, [redirecionar, navigate, Email, ImageURL, Name]); 

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
                        <GoogleLogin client_id="642597703339-9lqgmjs2gu7ij2ao7vk8sk1i7t4hkh1a.apps.googleusercontent.com" width={"250px"} height={"200px"} 
                          onSuccess={handleLoginSuccess}
                          onFailure={handleLoginFailure}

                        ></GoogleLogin>
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

export default SingIn;

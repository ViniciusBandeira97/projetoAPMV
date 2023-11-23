import { BodyContainer } from '../../components/Body/ConteinerCentral.Style'
import { ParagraphChoice } from '../../components/TextFormatting.Style'
import {ChoiceButton, ChoiceDiv } from '../../components/Button.style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
import BodyGlobal from '../../components/Body/BodyGlobal'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Index() {
  const [RedirecionarOpenCad, setRedirecionarOpenCad] = useState(false); //Após envio bem-sucedido para o Backend_ Função volta a pagina anterior
  const [RedirecionarOpenCars, setRedirecionarOpenCars] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {Name, Email, ImageURL} = location.state || {};

  const [mensagemErro, setMensagemErro] = useState('');

   // Limpar mensagem de erro, se houver
   //setMensagemErro('');

  const OpenCad = async () => {
      // Redirecionar a pagina de Cadastro de veiculo
      setRedirecionarOpenCad(true);
  };

  const OpenCars = async () => {
    try {
      // Resposta recebe apenas veículos cadastrados pelo {Email} passado via State
      const resposta = await fetch (`http://localhost:3000/api/carR/${Email}`);

      // Verifica se há pelo menos um veículo associado ao email
      const carros = await resposta.json();
      if (carros.length > 0) {
        //setMensagemErro('Nenhum veículo cadastrado para este email.');
         // Se há pelo menos um veículo, redirecione para a próxima página
        setRedirecionarOpenCars(true);
        return;
      }else{
        setMensagemErro('Não existe veículos para selecionar, Cadastre um novo veículo');
      }

    } catch (error) {
      console.error('Erro ao realizar a requisição:', error);
      //setMensagemErro('Erro interno do servidor');
    }
  };

  useEffect(() => {
    if (RedirecionarOpenCars) {
      const timeoutId = setTimeout(() => {
        navigate("/vehicle",{
          state:{Email, ImageURL, Name},
        });
      }, 500);

      // Limpar o timeout se o componente for desmontado antes do tempo limite
      return () => clearTimeout(timeoutId);
    }
  }, [RedirecionarOpenCars, navigate, Email, ImageURL, Name]); 


  useEffect(() => {
    // Se redirecionar for true, execute a ação após 1 segundos
    if (RedirecionarOpenCad) {
      const timeoutId = setTimeout(() => {
        navigate("/registercar",{
          state:{Email, ImageURL, Name},
        });
      }, 500);
      // Limpar o timeout se o componente for desmontado antes do tempo limite
      return () => clearTimeout(timeoutId);
    }
  }, [RedirecionarOpenCad, navigate, Email, ImageURL, Name]); 

  return (
    <>
    <HeaderGlobal />
    <BodyGlobal/>
        <center>
            <BodyContainer>
              <ParagraphChoice>Click nas opções abaixo para prosseguir...</ParagraphChoice>
              <ChoiceDiv>
                <ChoiceButton onClick={OpenCars}>Selecionar veículo</ChoiceButton>
                <ChoiceButton onClick={OpenCad}>Cadastrar novo veículo</ChoiceButton>
              </ChoiceDiv>
              {mensagemErro && <p style={{ color: 'red', fontSize: '18px' }}>{mensagemErro}</p>}
            </BodyContainer>
        </center>    
    </>
  )
}

export default Index
import { BodyContainer } from '../../components/Body/ConteinerCentral.Style'
import { ParagraphChoice } from '../../components/TextFormatting.Style'
import {ChoiceButton, ChoiceDiv } from '../../components/Button.style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
import BodyGlobal from '../../components/Body/BodyGlobal'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Index() {
  const [redirecionar, setRedirecionar] = useState(false); //Após envio bem-sucedido para o Backend_ Função volta a pagina anterior

  const navigate = useNavigate();
  const location = useLocation();
  const {Name, Email, ImageURL} = location.state || {};

  const OpenCad = async () => {
      // Configurar o estado para redirecionar
      setRedirecionar(true);
  };

  useEffect(() => {
    // Se redirecionar for true, execute a ação após 1 segundos
    if (redirecionar) {
      const timeoutId = setTimeout(() => {
        navigate("/registercar",{
          state:{Email, ImageURL, Name},
        });
      }, 500);

      // Limpar o timeout se o componente for desmontado antes do tempo limite
      return () => clearTimeout(timeoutId);
    }
  }, [redirecionar, navigate, Email, ImageURL, Name]); 

  return (
    <>
    <HeaderGlobal />
    <BodyGlobal/>
        <center>
            <BodyContainer>
              <ParagraphChoice>Click nas opções abaixo para prosseguir...</ParagraphChoice>
              <ChoiceDiv>
                <ChoiceButton>Selecionar veículo</ChoiceButton>
                <ChoiceButton onClick={OpenCad}>Cadastrar novo veículo</ChoiceButton>
              </ChoiceDiv>
            </BodyContainer>
        </center>    
    </>
  )
}

export default Index
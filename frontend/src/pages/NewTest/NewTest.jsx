import React, { useState, useEffect } from 'react';
import { BodyContainer } from '../../components/Body/ConteinerCentral.Style';
import HeaderGlobal from '../../components/Header/HeaderGlobal';
import BodyGlobal from '../../components/Body/BodyGlobal';
import { NumberCountdown, ParagraphMenu, TextLigue, VariableCar } from '../../components/TextFormatting.Style';
import { useLocation, useNavigate } from 'react-router-dom';

function NewTest() {
    const navigate = useNavigate();
    const location = useLocation();
    const {carInfo, Name, Email, ImageURL} = location.state || {};
    const [RedirecionarMenu, setRedirecionarMenu] = useState(false);

    
    const [countdown, setCountdown] = useState(15);
    const [showText, setShowText] = useState(false);

    
  const RegisterDelete = () => {
    // Redirecionar para a pagina ChoiceVehicle
    setRedirecionarMenu(true);
  };
  useEffect(() => {
    // Se redirecionar for true, execute a ação após 1/2 segundos
    if (RedirecionarMenu) {
      const timeoutId = setTimeout(() => {
        navigate("/menu",{
          state:{carInfo, Email, ImageURL, Name},
        });
      }, 500);
      // Limpar o timeout se o componente for desmontado antes do tempo limite
      return () => clearTimeout(timeoutId);
    }
  }, [ RedirecionarMenu, navigate, carInfo, Email, ImageURL, Name]); 



  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          // Última contagem, exibe o texto e limpa o intervalo
          setShowText(true);
          clearInterval(countdownInterval);

          // Oculta o texto após 5 segundos e para a contagem
          setTimeout(() => {
            setShowText(false);
            setCountdown(false); // Alterado aqui para 0
          }, 4000);
        }

        // Atualiza o countdown
        return prevCountdown - 1;
      });
    }, 1000);

    // Limpar intervalo quando o componente for desmontado
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
      <HeaderGlobal />
      <BodyGlobal />
      <center>
        <BodyContainer>
            <VariableCar>{carInfo.Marca}</VariableCar>
            <VariableCar>{carInfo.Modelo}</VariableCar>
            <ParagraphMenu>Atenção:</ParagraphMenu>
            <ParagraphMenu>Prepare-se para ligar o motor em:</ParagraphMenu>
                {showText ? (
                    <TextLigue>Ligue o veículo!</TextLigue>
                ) : (
                    <NumberCountdown>{countdown}</NumberCountdown>
                )}
        </BodyContainer>
      </center>
    </>
  );
}

export default NewTest;


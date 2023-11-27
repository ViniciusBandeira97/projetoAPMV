// CarCard.js
import { useLocation, useNavigate } from 'react-router-dom';
import { DivCarCard } from '../Body/ConteinerCentral.Style';
import { useEffect, useState } from 'react';

const CarCard = ({ carInfo }) => {
  const location = useLocation();
  const {Name, Email, ImageURL} = location.state || {};

  const navigate = useNavigate();
  const [RedirecionarMenu, setRedirecionarMenu] = useState(false);
  
  const handleCardClick = () => {
      // Redirecionar para pagina de Menu
      setRedirecionarMenu(true);
  };

  useEffect(() => {
    // Se redirecionarMeunu for true, execute a ação após 1/2 segundos
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

  return (
    <DivCarCard onClick={handleCardClick}>
      <h3 style={{ margin: '0' }}>{carInfo.Marca}</h3>
      <p style={{ margin: '5px 0 0' }}>Modelo: {carInfo.Modelo}</p>
      <p style={{ margin: '5px 0 0' }}>Ano: {carInfo.Ano}</p>
      <p style={{ margin: '5px 0 0' }}>Placa: {carInfo.Placa}</p>
      <p style={{ margin: '5px 0 0' }}>Descrição: {carInfo.Descrição}</p>
    </DivCarCard>
  );
};

export default CarCard;

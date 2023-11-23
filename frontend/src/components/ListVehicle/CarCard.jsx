// CarCard.js
import { useNavigate } from 'react-router-dom';
import { DivCarCard } from '../Body/ConteinerCentral.Style';

const CarCard = ({ carInfo }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/menu', {
      state: carInfo,
    });
  };

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

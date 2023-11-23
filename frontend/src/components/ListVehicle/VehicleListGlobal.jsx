// VehicleList.js
import { useState, useEffect } from 'react';
import CarCard from './CarCard';

const VehicleList = ({ Email }) => {
  const [Cars, setCars] = useState([]);
  const [mensagemErro, setMensagemErro] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await fetch(`http://localhost:3000/api/carR/${Email}`);

        const carsData = await resposta.json();
        setCars(carsData);
      } catch (error) {
        console.error('Erro ao realizar a requisição:', error);
        setMensagemErro('Erro interno do servidor');
      }
    };

    fetchData(); // Chama a função para buscar os dados ao montar o componente
  }, [Email]); // Executa a função novamente se o Email mudar

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxHeight: '400px', overflowY: 'auto' }}>
      {mensagemErro && <p style={{ color: 'red', fontSize: '18px' }}>{mensagemErro}</p>}
      {Cars.map((carro) => (
        <CarCard key={carro._id} carInfo={carro} />
      ))}
    </div>
  );
};

export default VehicleList;

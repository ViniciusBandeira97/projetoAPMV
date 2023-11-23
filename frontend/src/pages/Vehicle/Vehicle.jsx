import { useLocation, useNavigate } from 'react-router-dom';
import BodyGlobal from '../../components/Body/BodyGlobal'
import { BodyContainer, ContainerDivCard} from '../../components/Body/ConteinerCentral.Style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
import { useEffect, useState } from 'react';
import { DecisionButton } from '../../components/Button.style';
import CarCard from '../../components/ListVehicle/CarCard';

function Vehicle() {
  const [RedirecionarReturn, setRedirecionarReturn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {Name, Email, ImageURL} = location.state || {};

  const [Cars, setCars] = useState([]);
  const [mensagemErro, setMensagemErro] = useState('');


  const Return = async () => {
      // Redirecionar a pagina de Cadastro de veiculo
      setRedirecionarReturn(true);

  };

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

  useEffect(() => {
    // Se redirecionar for true, execute a ação após 1 segundos
    if (RedirecionarReturn) {
      const timeoutId = setTimeout(() => {
        navigate("/select",{
          state:{Email, ImageURL, Name},
        });
      }, 500);
      // Limpar o timeout se o componente for desmontado antes do tempo limite
      return () => clearTimeout(timeoutId);
    }
  }, [ RedirecionarReturn, navigate, Email, ImageURL, Name]); 

  return (
    <>
      <HeaderGlobal />
      <BodyGlobal/>
        <center>
            <BodyContainer>
              AGUARDANDO ENTRADA DE CÓDIGO AQUI !!!!!!

              
              <ContainerDivCard>
                {mensagemErro && <p style={{ color: 'red', fontSize: '18px' }}>{mensagemErro}</p>}
                {Cars.map((Car) => (
                  <CarCard key={Car._id} carInfo={Car} />
                ))}
              </ContainerDivCard>
              
                <DecisionButton onClick={Return}>Voltar</DecisionButton>
            
            </BodyContainer>
        </center>     
    </>
  )
}

export default Vehicle
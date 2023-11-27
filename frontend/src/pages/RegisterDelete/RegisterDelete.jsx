import { DecisionButtonNo, DecisionButtonYes, DivDB } from '../../components/Button.style'
import { BodyContainer} from '../../components/Body/ConteinerCentral.Style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
import { DivDescision, DivRegister, DivTitle, ParagraphDescision, ParagraphHistoric, TitleHistoric, VariableCar } from '../../components/TextFormatting.Style'
import BodyGlobal from '../../components/Body/BodyGlobal'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


function RegisterDelete() {
    const navigate = useNavigate();
    const location = useLocation();
    const {carInfo, Name, Email, ImageURL} = location.state || {};

    const[RedirecionarMenu, setRedirecionarMenu] = useState(false);
    const[RedirecionarChoiceVehicle, setRedirecionarChoiceVehicle] = useState(false);

    const YesExclud = async() =>{
      try {
        // Resposta recebe apenas o veículo cadastrado que contém Email, Modelo, Ano e Placa especificos do carR
        fetch (`http://localhost:3000/api/carR/${Email}/${carInfo.Modelo}/${carInfo.Ano}/${carInfo.Placa}`);
  
        
        setRedirecionarChoiceVehicle(true);
  
      } catch (error) {
        console.error('Erro ao realizar a requisição:', error);
        //setMensagemErro('Erro interno do servidor');
      }
    };

    useEffect(() => {
        // Se redirecionar for true, execute a ação após 1/2 segundos
        if (RedirecionarChoiceVehicle) {
          const timeoutId = setTimeout(() => {
            navigate("/select",{
              state:{Email, ImageURL, Name},
            });
          }, 500);
          // Limpar o timeout se o componente for desmontado antes do tempo limite
          return () => clearTimeout(timeoutId);
        }
      }, [ RedirecionarChoiceVehicle, navigate, Email, ImageURL, Name]); 

    const NoExclud = () => {
        // Redirecionar para a pagina Menu
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

  return (
    <>
       <HeaderGlobal />
      <BodyGlobal/>
        <center>
            <BodyContainer>
                <VariableCar>{carInfo.Marca}</VariableCar>
                <VariableCar>{carInfo.Modelo}</VariableCar>
                
                <DivTitle>
                    <TitleHistoric>Cadastro:</TitleHistoric>
                </DivTitle>
                
                <DivRegister>
                    <ParagraphHistoric>  Tem certeza que deseja excluir o cadastro desse veículo
                        e consequentemente todo o histórico de testes ?
                    </ParagraphHistoric>
                </DivRegister>
                <DivDescision>
                    <ParagraphDescision>
                        Sim: para prosseguir
                    </ParagraphDescision>
                    <ParagraphDescision>
                      Não: para desistir
                    </ParagraphDescision>
                </DivDescision>

                <DivDB>
                    <DecisionButtonNo onClick={NoExclud}>NÃO</DecisionButtonNo>
                    <DecisionButtonYes onClick={YesExclud}>SIM</DecisionButtonYes>
                </DivDB>  
            </BodyContainer>
        </center>     

    </>
  )
}

export default RegisterDelete
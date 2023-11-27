import { BodyContainer} from '../../components/Body/ConteinerCentral.Style'
import { ParagraphMenu, VariableCar } from '../../components/TextFormatting.Style'
import { MenuButtonChoiceVehicle, MenuButtonDelete, MenuButtonHistoric, MenuButtonNewTest, MenuDiv, MenuText } from '../../components/Button.style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
import BodyGlobal from '../../components/Body/BodyGlobal'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const {carInfo, Name, Email, ImageURL} = location.state || {};

  const[RedirecionarNewTest, setRedirecionarNewTest] = useState(false);
  const[RedirecionarChoiceVehicle, setRedirecionarChoiceVehicle] = useState(false);
  const[RedirecionarRegisterDelete, setRedirecionarRegisterDelete] = useState(false);

  const NewTest = () =>{
    // Redirecionar para a pagina ChoiceVehicle
    setRedirecionarNewTest(true);
  };

  useEffect(() => {
    // Se RedirecionarChoiceVehicle for true, execute a ação após 1/2 segundos
    if (RedirecionarNewTest) {
      const timeoutId = setTimeout(() => {
        navigate("/newtest",{
          state:{carInfo, Email, ImageURL, Name},
        });
      }, 500);
      // Limpar o timeout se o componente for desmontado antes do tempo limite
      return () => clearTimeout(timeoutId);
    }
  }, [ RedirecionarNewTest, navigate, carInfo, Email, ImageURL, Name]); 

  const ChoiceVehicle = () =>{
    // Redirecionar para a pagina ChoiceVehicle
    setRedirecionarChoiceVehicle(true);
  };

  useEffect(() => {
    // Se RedirecionarChoiceVehicle for true, execute a ação após 1/2 segundos
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

  const RegisterDelete = () => {
    // Redirecionar para a pagina ChoiceVehicle
    setRedirecionarRegisterDelete(true);
  };
  useEffect(() => {
    // Se redirecionar for true, execute a ação após 1/2 segundos
    if (RedirecionarRegisterDelete) {
      const timeoutId = setTimeout(() => {
        navigate("/registerdelete",{
          state:{carInfo, Email, ImageURL, Name},
        });
      }, 500);
      // Limpar o timeout se o componente for desmontado antes do tempo limite
      return () => clearTimeout(timeoutId);
    }
  }, [ RedirecionarRegisterDelete, navigate, carInfo, Email, ImageURL, Name]); 

  return (
    <>
      <HeaderGlobal />
      <BodyGlobal/>
        <center>
            <BodyContainer>
                <VariableCar>{carInfo.Marca}</VariableCar>
                <VariableCar>{carInfo.Modelo}</VariableCar>
                <ParagraphMenu>Opções:</ParagraphMenu>
                    <MenuDiv>
                        <MenuButtonNewTest onClick={NewTest}><MenuText>Novo Teste</MenuText></MenuButtonNewTest>
                        <MenuButtonHistoric ><MenuText>Histórico</MenuText></MenuButtonHistoric>
                        <MenuButtonChoiceVehicle onClick={ChoiceVehicle}><MenuText>Trocar Veículo</MenuText></MenuButtonChoiceVehicle>
                        <MenuButtonDelete onClick={RegisterDelete}><MenuText>Excluir veículo</MenuText></MenuButtonDelete>
                    </MenuDiv>
            </BodyContainer>
        </center>     
    </>
  )
}

export default Menu
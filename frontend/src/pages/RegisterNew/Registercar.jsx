import { BodyContainer, ConteinerDiv } from '../../components/Body/ConteinerCentral.Style'
import { ParagraphCRUD } from '../../components/TextFormatting.Style'
import { DecisionButton, DivDB } from '../../components/Button.style'
import { Idiv, IdivDesc, Input, InputDesc } from '../../components/Input.Style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
import BodyGlobal from '../../components/Body/BodyGlobal'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Registercar = () => {
    const [Marca, setMarca] = useState('');
    const [Modelo, setModelo] = useState('');
    const [Ano, setAno] = useState('');
    const [Placa, setPlaca] = useState('');
    const [Descrição, setDescrição] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [redirecionar, setRedirecionar] = useState(false); //Após envio bem-sucedido para o Backend_ Função volta a pagina anterior
  
    const navigate = useNavigate();
    const location = useLocation();
    const {Name, Email, ImageURL} = location.state || {};

  const cancelarCad = async() => {
    setRedirecionar(true);
  };
  
  if (!UserEmail && Email){
    setUserEmail(Email);
    console.log('entrou no IF para setar email de:  ', Email)
  }
  const enviarParaBackend = async () => {
    // Verificar se campos obrigatórios estão preenchidos
    if (!Marca || !Modelo || !Ano || !Placa ) {
      setMensagemErro('Por favor, preencha todos os campos obrigatórios "*".');
      return;
    }
    console.log("Entrou no IF, o que tem no UserEmail: ", UserEmail);
    try {
      const resposta = await fetch('http://localhost:3000/api/carR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Marca,
          Modelo,
          Ano,
          Placa,
          Descrição,
          UserEmail,
        }),
      });
      const dados = await resposta.json();
      console.log('Resposta do backend:', dados); 

      // Limpar mensagem de erro, se houver
      setMensagemErro('');

      // Configurar o estado para redirecionar
      setRedirecionar(true);
    }catch (error) {
      console.error('Erro no enviar para o backend:', error);      
    }
  };

  useEffect(() => {
    // Se redirecionar for true, execute a ação após 1/2 segundos
    if (redirecionar) {
      const timeoutId = setTimeout(() => {
        navigate("/select",{
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
                <h1>Veículo</h1>
                
                <ConteinerDiv>
                    <ParagraphCRUD>*Marca:</ParagraphCRUD>
                      <Idiv>
                          <Input 
                            type ="text"
                            value={Marca} 
                            onChange={(e) => setMarca(e.target.value)}
                          />
                      </Idiv>
                    <ParagraphCRUD>*Modelo:</ParagraphCRUD>
                      <Idiv>
                          <Input
                            type ="text"
                            value={Modelo} 
                            onChange={(e) => setModelo(e.target.value)}
                          />
                      </Idiv>
                    <ParagraphCRUD>*Ano:</ParagraphCRUD>
                      <Idiv>
                          <Input
                            type ="number"
                            value={Ano} 
                            onChange={(e) => setAno(e.target.value)}
                          />
                      </Idiv>
                    <ParagraphCRUD>*Placa:</ParagraphCRUD>
                      <Idiv>
                          <Input
                            type ="text"
                            value={Placa} 
                            onChange={(e) => setPlaca(e.target.value)}
                          />
                      </Idiv>
                    <ParagraphCRUD>Descrição (Opcional:)</ParagraphCRUD>
                      <IdivDesc>
                          <InputDesc
                            type ="text"
                            value={Descrição} 
                            onChange={(e) => setDescrição(e.target.value)}
                          />
                      </IdivDesc>
                      {mensagemErro && <p style={{ color: 'red', fontSize: '18px' }}>{mensagemErro}</p>}
                      <DivDB>
                        <DecisionButton onClick={cancelarCad}>Cancelar</DecisionButton>
                        <DecisionButton onClick={enviarParaBackend}>Salvar</DecisionButton>
                      </DivDB>
                 
                </ConteinerDiv>
            </BodyContainer>
        </center>     
    </>
  )
}

export default Registercar;
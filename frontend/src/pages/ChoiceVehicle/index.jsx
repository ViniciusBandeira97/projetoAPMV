import { BodyContainer } from '../../components/Body/ConteinerCentral.Style'
import { ParagraphChoice } from '../../components/TextFormatting.Style'
import {ChoiceButton, ChoiceDiv } from '../../components/Button.style'
import HeaderGlobal from '../../components/Header/HeaderGlobal'
import BodyGlobal from '../../components/Body/BodyGlobal'
import { Link } from 'react-router-dom'

function index() {

  return (
    <>
    <HeaderGlobal />
    <BodyGlobal/>
        <center>
            <BodyContainer>
              <ParagraphChoice>Click nas opções abaixo para prosseguir...</ParagraphChoice>
              <ChoiceDiv>
                <ChoiceButton>Selecionar veículo</ChoiceButton>
                <Link to={"/registercar"}><ChoiceButton>Cadastrar novo veículo</ChoiceButton></Link>
              </ChoiceDiv>
            </BodyContainer>
        </center>    

    </>
  )
}

export default index
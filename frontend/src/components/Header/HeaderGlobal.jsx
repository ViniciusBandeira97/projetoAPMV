import { CenterTitle, ElementEmail, ElementImageURL, ElementName, ElementText, Exit, HeaderTitleDiv, ImageCarDiv, ImgCar, StyleHeader, Title, UserProfile } from "./Header.Style"
import { useLocation } from 'react-router-dom'

function HeaderGlobal() {
    const location = useLocation();
    const {Name, Email, ImageURL} = location.state || {};
    return (
        <>
            <StyleHeader>
                <HeaderTitleDiv>
                    <Title>Projeto APMV</Title>
                </HeaderTitleDiv>
                <ImageCarDiv>
                    <ImgCar src="./images/car.png" />
                <CenterTitle>Bem Vindo!</CenterTitle>
                </ImageCarDiv>
                <UserProfile>
                    {ImageURL && <ElementImageURL src={ImageURL}/>}
                    <ElementText>
                        {Name && <ElementName>{Name}</ElementName>}
                        {Email && <ElementEmail>{Email}</ElementEmail>}
                        <Exit>Sair</Exit>
                    </ElementText>
                </UserProfile>

            </StyleHeader>
        </>
    )
}
export default HeaderGlobal
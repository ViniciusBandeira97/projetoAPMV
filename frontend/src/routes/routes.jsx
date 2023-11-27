import { BrowserRouter, Route, Routes} from "react-router-dom"
import ChoiceVeiculo from "../pages/ChoiceVehicle/index"
import Menu from "../pages/Menu/Menu"
import RegisterNew from "../pages/RegisterNew/Registercar"
import Vehicle from "../pages/Vehicle/Vehicle"
import HistoricDelete from "../pages/HistoricDelete"
import RegisterDelete from "../pages/RegisterDelete/RegisterDelete"
import PrincipalPage from "../pages/SingIn/SingIn"
import NewTest from "../pages/NewTest/NewTest"

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PrincipalPage /> }></Route>
                <Route path="/select" element={ <ChoiceVeiculo /> }></Route>
                <Route path="/registercar" element={ <RegisterNew /> }></Route>
                <Route path="/vehicle" element={ <Vehicle /> }></Route>
                <Route path="/menu" element={ <Menu /> }></Route>
                <Route path="/newtest" element={ <NewTest /> }></Route>
                <Route path="/historicdelete" element={ <HistoricDelete /> }></Route>
                <Route path="/registerdelete" element={ <RegisterDelete /> }></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
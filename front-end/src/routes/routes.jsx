import { BrowserRouter, Route, Routes} from "react-router-dom"
import ChoiceVeiculo from "../pages/ChoiceVehicle"
import Menu from "../pages/Menu"
import RegisterNew from "../pages/RegisterNew"
import Vehicle from "../pages/Vehicle"
import HistoricDelete from "../pages/HistoricDelete"
import RegisterDelete from "../pages/RegisterDelete"
import Teste from "../pages/SingIn"

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/select" element={ <ChoiceVeiculo /> }></Route>
                <Route path="/registercar" element={ <RegisterNew /> }></Route>
                <Route path="/selectcar" element={ <Vehicle /> }></Route>
                <Route path="/menu" element={ <Menu /> }></Route>
                <Route path="/historicdelete" element={ <HistoricDelete /> }></Route>
                <Route path="/registerdelete" element={ <RegisterDelete /> }></Route>
                <Route path="/teste" element={ <Teste /> }></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
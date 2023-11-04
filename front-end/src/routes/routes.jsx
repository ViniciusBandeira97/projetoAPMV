import { BrowserRouter, Route, Routes} from "react-router-dom"
import ChoiceVeiculo from "../pages/ChoiceVeiculo"
import Menu from "../pages/Menu"

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <ChoiceVeiculo /> }></Route>
                <Route path="/menu" element={ <Menu /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
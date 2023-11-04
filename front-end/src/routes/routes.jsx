import { BrowserRouter, Route, Routes} from "react-router-dom"
import ChoiceVeiculo from "../pages/ChoiceVeiculo"

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <ChoiceVeiculo /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
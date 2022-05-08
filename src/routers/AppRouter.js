import {Routes, Route, BrowserRouter} from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";

import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        
        <Routes>
            
            <Route path="/login" element={<LoginScreen/>}/>

            <Route path="/*" element={<DashboardRoutes/>} /> //El /* quiere decir que todas las rutas van a ser manejadas por aquí
            
        </Routes>

    </BrowserRouter>
  )
}

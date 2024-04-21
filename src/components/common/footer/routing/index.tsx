import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQ from "../pages/FAQ";
import PrivacyPage from "../pages/privacy";

function RouteFooter(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/FAQ" element={<FAQ/>}/>
                </Routes>
                
                <Routes>
                    <Route path="/privacy" element={<PrivacyPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default RouteFooter;
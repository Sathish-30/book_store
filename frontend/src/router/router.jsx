import { createBrowserRouter , createRoutesFromElements , Route } from "react-router-dom";
import { Home , Shop, LandingPageLayout, About, Blog } from "../components/index.js";
import Banner from "../components/Banner.jsx";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<LandingPageLayout/>}>
            <Route path="" element={<>
                <Home/>
            </>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="blog" element={<Blog/>}/>
        </Route>
    )
);

export default router
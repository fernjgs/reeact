// import { BrowserRouter, Route, Routes } from "react-router-dom"

// const Router = () => {
//     <BrowserRouter>
//         <Routes>
//             <Route />
//             <Route />
//         </Routes>



//     </BrowserRouter>
// }


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Layout from './componentes/layout';





const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<About />} />
                <Route path="/About/:id" element={<Contact />} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;
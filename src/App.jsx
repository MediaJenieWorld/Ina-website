import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"


const Header = lazy(() => import("./Components/Header/Header"));
const INA_Footer = lazy(() => import("./Components/Footer/Footer"));
const Ina_Landing_Page = lazy(() => import("./Pages/Landing/Ina"));
const Service_Page = lazy(() => import("./Pages/Service/Service"));
const CardsPage = lazy(() => import("./Pages/page"));
const Service_Details_Page = lazy(() => import("./Pages/Service/Details/Details"));
const Quantum_Literacy_Page = lazy(() => import("./Pages/Service/Quantum_Literacy/Quantum_Literacy"));
const Machine_Learning_Page = lazy(() => import("./Pages/Service/Machine_Learning/Machine_Learning"));
const AI_ML_Page = lazy(() => import("./Pages/Service/AI-ML/AI_ML"));


const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading" ></div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Ina_Landing_Page />} />
          <Route path="/services" element={<Service_Page />} />
          <Route path="/services/details" element={<Service_Details_Page />} />
          <Route path="/services/quantum_literacy" element={<Quantum_Literacy_Page />} />
          <Route path="/services/quantum_machine_learning" element={<Machine_Learning_Page />} />
          <Route path="/services/ai-ml" element={<AI_ML_Page />} />

          <Route path="/card" element={<CardsPage />} />
          <Route path="*" element={<Ina_Landing_Page />} />
        </Routes>
        <INA_Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

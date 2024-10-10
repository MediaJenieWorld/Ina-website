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
const Data_Analytics_Page = lazy(() => import("./Pages/Service/Data_Analytics/Data_Analytics"));
const Knowledge_Graph_Page = lazy(() => import("./Pages/Service/Knowledge_Graph/Knowledge_Graph"));
const AboutPage = lazy(() => import("./Pages/About/About"));
const Contract_VehiclesPage = lazy(() => import("./Pages/Contract_Vehicles/Contract_Vehicles"))
const Clients_Page = lazy(() => import("./Pages/Clients/Clients"))
const Capabilities_Page = lazy(() => import("./Pages/Capabilities/Capabilities"))

const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading" ></div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Ina_Landing_Page />} />
          <Route path="/services" element={<Service_Page />} />
          <Route path="/services/quantum_sensing" element={<Service_Details_Page />} />
          <Route path="/services/quantum_literacy" element={<Quantum_Literacy_Page />} />
          <Route path="/services/quantum_machine_learning" element={<Machine_Learning_Page />} />
          <Route path="/services/adanced-data-analytics" element={<Data_Analytics_Page />} />
          <Route path="/services/ai-ml" element={<AI_ML_Page />} />
          <Route path="/services/knowledge_graph" element={<Knowledge_Graph_Page />} />
          <Route path="/home/about" element={<AboutPage />} />
          <Route path="/home/contract_vehicles" element={<Contract_VehiclesPage />} />
          <Route path="/home/clientele" element={<Clients_Page />} />
          <Route path="/home/capabilities" element={<Capabilities_Page />} />
          <Route path="/card" element={<CardsPage />} />
          <Route path="*" element={<Ina_Landing_Page />} />
        </Routes>
        <INA_Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

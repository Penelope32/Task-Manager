
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import DashBoard from "./pages/DashBoard"
import AddTask from "./pages/AddTask"
import CompletedTask from "./pages/CompletedTask"
import EditTasK from "./pages/EditTask"
import Tasks from "./pages/Tasks"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="DashBoard" element={<DashBoard />} />
          <Route path="AddTask" element={<AddTask />} />
          <Route path="CompletedTask" element={<CompletedTask />} />
          <Route path="EditTasK" element={<EditTasK />} />
          <Route path="TasKs" element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App

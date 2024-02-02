import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import { RecoilRoot } from "recoil";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#a82a22",
        },
        components: {
          Layout: {
            bodyBg: "#fff",
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
    </RecoilRoot>
    
  );
};

export default App;

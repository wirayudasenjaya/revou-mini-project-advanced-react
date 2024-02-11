import React from "react";
import { useRecoilValue } from "recoil";
import { userSelector } from "../atom";
import { Button, Layout, Select } from "antd";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const user = useRecoilValue(userSelector);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "id", label: "Indonesia" },
  ];

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const handleClick = () => {
    localStorage.removeItem("recoil-persist");
    navigate("/");
  };

  return (
    <Layout className="layout">
      <div className="dashboard">
        <Select
          defaultValue="en"
          style={{ width: 120 }}
          onChange={handleChange}
          options={languageOptions}
        />
        <br />
        <div className="profile">
          <img
            src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${user.fullname}&backgroundColor=a82a22&shapeColor=f1f4dc`}
            alt="avatar"
            className="avatar"
          />
          <h1>
            {t("Hello")}, {user.fullname}
          </h1>
        </div>
        <Button type="primary" key="console" onClick={handleClick}>
          {t("Back to register")}
        </Button>
      </div>
    </Layout>
  );
};

export default DashboardPage;

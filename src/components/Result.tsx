import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../i18n';

const ResultPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Result
      status="success"
      title={t("Successfully Registered!")}
      subTitle={t("Enjoy your day")}
      extra={[
        <Link to="dashboard">
          <Button type="primary" key="console">
            {t("Go to dashboard")}
          </Button>
        </Link>,
      ]}
    />
  );
};

export default ResultPage;

import React, { useState } from "react";
import { Button, Form, Layout, Select } from "antd";
import { useRecoilState } from "recoil";
import Step from "../components/Step";
import FormPage1 from "../components/FormPage1";
import FormPage2 from "../components/FormPage2";
import FormPage3 from "../components/FormPage3";
import ResultPage from "../components/Result";
import background from "../assets/image.webp";
import { userState } from "../atom";
import { useTranslation } from "react-i18next";
import '../i18n';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const [current, setCurrent] = useState<number>(0);
  const [formValue, setFormValue] = useState<any>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [user, setUser] = useRecoilState<any>(userState);
  const {t, i18n} = useTranslation();
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "id", label: "Indonesia" },
  ]

  const onFinish = (values: any) => {
    if (current === 2) {
      // setFormValue((prev: any) => ({ ...prev, ...values }));
      setUser((prev: any) => ({ ...prev, ...values }));
      setShowResult(true);
    } else {
      setCurrent(current + 1);
      // setFormValue((prev: any) => ({ ...prev, ...values }));
      setUser((prev: any) => ({ ...prev, ...values }));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Layout className="layout">
      {showResult === true ? (
        <div className="result">
          <ResultPage />
        </div>
      ) : (
        <>
          <img src={background} alt="background" className="background" />
          <section className="form-box">
            <Select
              defaultValue="en"
              style={{ width: 120, placeSelf: "end" }}
              onChange={handleChange}
              options={languageOptions}
            />
            <br />
            <Step index={current} />
            <br />
            <h1>
              {current === 0
                ? `${t("Personal Information")}`
                : current === 1
                ? `${t("Address Information")}`
                : `${t("Account Information")}`}
            </h1>
            <Form
              name="basic"
              layout="vertical"
              style={{
                width: "90%",
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {current === 0 ? (
                <FormPage1 />
              ) : current === 1 ? (
                <FormPage2 />
              ) : (
                <FormPage3 />
              )}

              <Form.Item style={{ textAlign: "right" }}>
                <Button
                  style={{ margin: "0 8px" }}
                  disabled={current === 0 ? true : false}
                  onClick={() => setCurrent(current - 1)}
                >
                  {t("Previous")}
                </Button>
                {current < 2 && (
                  <Button type="primary" htmlType="submit">
                    {t("Next")}
                  </Button>
                )}
                {current === 2 && (
                  <Button type="primary" htmlType="submit">
                    {t("Submit")}
                  </Button>
                )}
              </Form.Item>
            </Form>
          </section>
        </>
      )}
    </Layout>
  );
};

export default RegisterPage;

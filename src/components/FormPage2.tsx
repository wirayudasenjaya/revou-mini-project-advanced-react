import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import '../i18n';

const FormPage2: React.FC = () => {
  type FieldType = {
    street?: string;
    city?: string;
    state?: string;
  };

  const { t } = useTranslation();

  return (
    <>
      <Form.Item<FieldType>
        label={t("Street")}
        name="street"
        rules={[
          {
            required: true,
            message: `${t("Please input your address street!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t("City")}
        name="city"
        rules={[
          {
            required: true,
            message: `${t("Please input your address city!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t("State")}
        name="state"
        rules={[
          {
            required: true,
            message: `${t("Please input your address state!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default FormPage2;

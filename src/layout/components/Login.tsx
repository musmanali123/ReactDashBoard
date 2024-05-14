import React, { useState } from "react";
import {
  LockOutlined,
  MobileOutlined,
  UserOutlined,
  AppleOutlined,
  FacebookOutlined,
  GoogleCircleFilled
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Divider, message, Space, Tabs } from "antd";
import type { CSSProperties } from "react";
import { useLoginStore } from "@stores/index";

type LoginType = "phone" | "account";

const iconStyles: CSSProperties = {
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "18px",
  verticalAlign: "middle",
  cursor: "pointer",
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Login = () => {
  const [loginType, setLoginType] = useState<LoginType>("account");
  const { setUserInfo } = useLoginStore();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    return delay(1000).then(() => {
      message.success("SUCCESS🎉🎉🎉");
      setUserInfo(values);
      navigate("/", { replace: true });
    });
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <LoginFormPage
      // submitter is the dynamic taker for user
      submitter={{
        searchConfig:{
          submitText:'Login'
        }
      }}
      // chnage picture accordingly
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        onFinish={onFinish as any}
        title="Admin DashBoard"
        subTitle="A lightweight react backend management system"
        activityConfig={{
          style: {
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
            color: "#fff",
            borderRadius: 8,
            backgroundColor: "#1677FF",
          },
          title: "Event title, configurable image",
          subTitle: "Activity introduction description text ",
          action: (
            <Button
              size="large"
              style={{
                borderRadius: 20,
                background: "#fff",
                color: "#1677FF",
                width: 120,
              }}
            >
              Go
            </Button>
          ),
        }}
        actions={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Divider plain>
              <span
                style={{ color: "#CCC", fontWeight: "normal", fontSize: 14 }}
              >
                Other login methods
              </span>
            </Divider>
            <Space align="center" size={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid #D4D8DD",
                  borderRadius: "50%",
                }}
              >
                <GoogleCircleFilled style={{ ...iconStyles, color: "#000000" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid #D4D8DD",
                  borderRadius: "50%",
                }}
              >
                <FacebookOutlined style={{ ...iconStyles, color: "#000000" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid #D4D8DD",
                  borderRadius: "50%",
                }}
              >
                <AppleOutlined />
              </div>
            </Space>
          </div>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key={"account"} tab={"Login with account"} />
          <Tabs.TabPane key={"phone"} tab={"Login with number"} />
        </Tabs>
        {loginType === "account" && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined className={"prefixIcon"} />,
              }}
              placeholder={"susername: admin or user"}
              rules={[
                {
                  required: true,
                  message: "please enter user name!",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixIcon"} />,
              }}
              placeholder={"password: 123456"}
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            />
          </>
        )}
        {loginType === "phone" && (
          <>
            <ProFormText
              fieldProps={{
                size: "large",
                prefix: <MobileOutlined className={"prefixIcon"} />,
              }}
              name="mobile"
              placeholder={"Phone number"}
              rules={[
                {
                  required: true,
                  message: "Please enter phone number!",
                },
                {
                  pattern: /^1\d{10}$/,
                  message: "Malformed phone number!",
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixIcon"} />,
              }}
              captchaProps={{
                size: "large",
              }}
              placeholder={"please enter verification code"}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${"get verification code"}`;
                }
                return "get verification code";
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: "please enter verification code!",
                },
              ]}
              onGetCaptcha={async () => {
                message.success("Obtained verification code successfully! The verification code is：1234");
              }}
            />
          </>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            auto login
          </ProFormCheckbox>
          <a
            style={{
              float: "right",
            }}
          >
            forget the password
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default Login;

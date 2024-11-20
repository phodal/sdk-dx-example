"use client";

import { Layout, Menu, MenuProps } from "antd";
import {
  DatabaseOutlined,
  FileTextOutlined,
  ApiOutlined,
  DownloadOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "database",
    icon: <DatabaseOutlined />,
    label: <a href="/spec/database">Database Specification</a>,
  },
  {
    key: "log",
    icon: <FileTextOutlined />,
    label: <a href="/spec/log">Log Specification</a>,
  },
  {
    key: "middleware",
    icon: <ApiOutlined />,
    label: <a href="/spec/middleware">Middleware Specification</a>,
  },
  {
    key: "install",
    icon: <DownloadOutlined />,
    label: <a href="/install">Install SDK</a>,
  },
  {
    key: "faq",
    icon: <QuestionCircleOutlined />,
    label: <a href="/faq">FAQ</a>,
  },
  {
    key: "errorcode",
    icon: <FileTextOutlined />,
    label: <a href="/spec/errorcode">Error Code</a>,
  }
];

const AntSider = (props: React.ComponentProps<typeof Layout.Sider>) => {
  return (
    <Layout.Sider {...props}>
      <Menu items={items} />
    </Layout.Sider>
  );
};

export default AntSider;

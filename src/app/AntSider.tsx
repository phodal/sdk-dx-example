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
    key: "Quick Start",
    icon: <DownloadOutlined />,
    label: <a href="/install">Install SDK</a>,
  },
  {
    key: "log",
    icon: <FileTextOutlined />,
    label: <a href="/spec/log">Log</a>,
  },
  {
    key: "database",
    icon: <DatabaseOutlined />,
    label: <a href="/spec/database">Database</a>,
  },
  {
    key: "middleware",
    icon: <ApiOutlined />,
    label: <a href="/spec/middleware">Middleware</a>,
  },
  {
    key: "error-code",
    icon: <FileTextOutlined />,
    label: <a href="/spec/error-code">Error Code</a>,
  },
  {
    key: "protobuf",
    icon: <FileTextOutlined />,
    label: <a href="/spec/protobuf">Protobuf</a>,
  },
  {
    key: "faq",
    icon: <QuestionCircleOutlined />,
    label: <a href="/faq">FAQ</a>,
  },
];

const AntSider = (props: React.ComponentProps<typeof Layout.Sider>) => {
  return (
    <Layout.Sider {...props}>
      <Menu items={items} />
    </Layout.Sider>
  );
};

export default AntSider;

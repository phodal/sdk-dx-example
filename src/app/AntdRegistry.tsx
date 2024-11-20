"use client";

import { ConfigProvider } from "antd";

const AntdRegistry = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export default AntdRegistry;

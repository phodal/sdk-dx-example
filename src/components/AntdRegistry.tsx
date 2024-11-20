"use client";

import { ConfigProvider } from "antd";

export default function AntdRegistry(props) {
  return <ConfigProvider {...props} />;
}

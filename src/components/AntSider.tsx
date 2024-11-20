"use client";

import Layout from "antd/lib/layout";
import { SiderProps } from "antd/lib/layout";

const Sider = Layout.Sider;

export default function AntSider(props: SiderProps) {
  return <Sider {...props} />;
}

"use client";

import Layout from "antd/lib/layout";
import { HeaderProps } from "antd/lib/layout";

const Header = Layout.Header;

export default function AntHeader(props: HeaderProps) {
  return <Header {...props} />;
}

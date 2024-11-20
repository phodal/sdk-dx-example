"use client";

import Layout from "antd/lib/layout";
import { ContentProps } from "antd/lib/layout";

const Content = Layout.Content;

export default function AntContent(props: ContentProps) {
  return <Content {...props} />;
}

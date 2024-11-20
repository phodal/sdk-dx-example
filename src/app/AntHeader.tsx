"use client";

import { Layout } from "antd";

const AntHeader = (props: React.ComponentProps<typeof Layout.Header>) => {
  return <Layout.Header {...props} />;
};

export default AntHeader;

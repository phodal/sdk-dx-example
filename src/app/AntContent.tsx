"use client";

import { Layout } from "antd";

const AntContent = (props: React.ComponentProps<typeof Layout.Content>) => {
  return <Layout.Content {...props} />;
};

export default AntContent;

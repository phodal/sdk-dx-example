"use client";

import { Layout } from "antd";

const AntSider = (props: React.ComponentProps<typeof Layout.Sider>) => {
  return <Layout.Sider {...props} />;
};

export default AntSider;

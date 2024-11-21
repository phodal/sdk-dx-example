"use client";

import { Layout, Typography } from "antd";

const AntHeader = (props: React.ComponentProps<typeof Layout.Header>) => {
  return (
    <Layout.Header {...props}>
      <Typography.Title level={2} style={{ color: 'white' }}>
        xx framework
      </Typography.Title>
    </Layout.Header>
  );
};

export default AntHeader;

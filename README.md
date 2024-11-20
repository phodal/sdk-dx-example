# Framework SDK Example


> 这是一个 Framework 的文档网站，请实现一个查看 HTTP 错误码解释的页面，我希望的路由是 /spec/errorcode#404 指定对应的 404 解释

https://sdk-dx-example.vercel.app/

> 这是一个 Framework 的文档网站，请实现一个查看规范的页面，我希望的路由是 /spec/log 指定对应的是日志文档的，请帮我生成 /spec/database，/spec/log 和 /spec/middleware 三个页面


> 这是一个 Framework 的文档网站，请实现一个查看发布的页面，我希望的路由是 /release/{{version}} 其中的 version 指定对应的版本号的发布日志


> 这是一个 Framework 的文档网站，请实现一个 Install 的页面，我的 SDK 是一个 Maven 包（com.phodal.sdk），请生成对应的 Maven 依赖添加流程


> 这是一个 Framework 的文档网站，请实现一个 FAQ 的页面，请编写一个些常见的 Java maven 包异常问题，比如依赖源不对，版本冲突等

```markdown
请用 AntDesign 为这个项目重新设计布局，由于 Next.js 的 Server render 机制，你需要 wrapper 一下  AntD 的 Header, Sider 和 Header，如下是一个 wrapper 示例：

"use client";

import Layout, { SiderProps } from "antd/lib/layout";
const Content = Layout.Content;

export default function AntContent(props: SiderProps) {
return <Content {...props} />;
}
```

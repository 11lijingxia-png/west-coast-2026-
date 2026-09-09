# 旅行手册发布

## 发布内容

网页唯一源文件是 `outputs/index.html`，保持当前内容不变。
Cloudflare 构建时只复制此 HTML，不改写页面，不上传订单截图、PDF、账号密码或确认号。
网站使用 Cloudflare Workers Static Assets；GitHub 仓库可以设为 Private，网站仍可公开访问。
Wrangler 只是部署工具，不是网页运行时依赖。

## 首次连接步骤

以下首次配置请在电脑浏览器完成。

1. 在 GitHub 登录你的账号，创建名为 `west-coast-2026` 的 Private 仓库。不要选择付费功能。
2. 将发布包解压，把其中的文件与目录按原结构上传到仓库根目录，提交到 `main`。不要把 ZIP 本身作为网站上传，也不要上传整个工作目录或任何订单原件。
3. 在 Cloudflare 进入 Workers & Pages，选择 Create application，再选择 Import a repository 或 Connect to GitHub。授权时只选择这个旅行手册仓库，不要开放其他仓库。
4. 选择该仓库，使用以下设置后点击 Save and Deploy。若要求授权访问或接受新条款，请你本人确认；若要求选择付费套餐，不要继续。
5. 部署成功后使用控制台提供的正式 `workers.dev` 网址。浏览者不需要登录。未出现成功部署和正式网址前，不代表已经上线。

| 配置 | 值 |
| --- | --- |
| Worker 名称 | `west-coast-2026` |
| 生产分支 | `main` |
| 根目录 | 仓库根目录，留空或 `/` |
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |
| Node.js | 22 或更新版本 |

## 后续更新

修改 `outputs/index.html` 并提交、push 到 `main` 后，Cloudflare 自动构建发布。
只保存本地文件不会更新线上网页。通过 GitHub 网页编辑并提交也可以触发发布。
`deploy/build-assets.mjs` 只为部署复制网页，不改变源文件。

## 离线使用

单文件 HTML 可以下载后离线打开。Google 地图导航、外部网站和实时信息仍需要联网。
必备清单勾选状态保存在各自浏览器，公开网页不会同步两人的勾选。

## 官方说明

- [Cloudflare Workers Git 自动发布](https://developers.cloudflare.com/workers/ci-cd/builds/)
- [构建与部署配置](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [静态资源部署](https://developers.cloudflare.com/workers/static-assets/get-started/)

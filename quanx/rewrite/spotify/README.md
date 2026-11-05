# Spotify 去广告 — Quantumult X 版

## 来源声明（重要）

| 项目 | 内容 |
| --- | --- |
| 原插件 | Loon 插件 `Spotify.lpx` |
| 原作者 | **devchristian1337**（https://github.com/devchristian1337） |
| 原项目 | https://github.com/devchristian1337/loon-plugins |
| 原插件文件 | https://raw.githubusercontent.com/devchristian1337/loon-plugins/refs/heads/main/Plugins/Spotify.lpx |
| 介绍页 | https://loon-plugins.vercel.app/zh/plugins/spotify |
| 许可 | 原项目 README 声明为 **MIT License**（注：截至 2026-11-05，上游仓库内没有单独的 LICENSE 文件，许可声明见其 README 的 License 一节）。本仓库保留原作者署名与出处链接，按原声明使用。 |
| 本仓库做了什么 | 维护者 quietmodem 仅将原 Loon 插件**转换**为 Quantumult X 格式：重写语法转换、5 个脚本的 QuanX 数据读写适配。核心处理逻辑（protobuf 补丁、去广告算法）全部来自原项目，未做功能性修改。 |
| 与原作者关系 | 这**不是**原作者的官方 QuanX 版本，原作者未参与、未背书。两个 Premium 补丁脚本未复制到本仓库，重写里仍直接引用原作者仓库的地址。 |
| 权利请求 | 如原作者认为本转换侵犯其权利，请在本仓库提 issue 或联系维护者，将及时修改或删除。 |

本插件与 Spotify 公司无关，仅供个人学习、自用，使用风险自担（与上游免责声明一致）。

## 安装（Quantumult X）

1. 在 Quantumult X 里添加远程重写，地址：
   `https://raw.githubusercontent.com/quietmodem/scripts/refs/heads/main/quanx/rewrite/spotify/spotify.snippet`
2. 生成并信任 Quantumult X 的 MITM 证书，打开 MITM。
3. 把下面一行手动加到配置的 `[filter_local]` 段（对应原插件屏蔽广告追踪域名的规则，重写订阅带不了）：
   `host, aet.spotify.com, reject`
4. 退出 Spotify，重新登录，配置才完整生效。

可选：Spotify 若走 QUIC 绕过 MITM，可在配置 `[general]` 段给 `udp_drop_list` 追加 `QUIC`（ QuanX 不能像 Loon 那样只拦 spotify.com 的 QUIC，这是全局丢弃，介意影响其他 App 就别加）。

## 文件对应关系

| 本仓库文件 | 上游来源 |
| --- | --- |
| `quanx/rewrite/spotify/js/spot-NoSearchAd.qx.js` | 上游 `Scripts/Spotify/spot-NoSearchAd.js`，仅改 `$response.bodyBytes` 读写 |
| `quanx/rewrite/spotify/js/spot-NoHomeAd.qx.js` | 上游 `Scripts/Spotify/spot-NoHomeAd.js`，同上 |
| `quanx/rewrite/spotify/js/spot-NoScrollAd.qx.js` | 上游 `Scripts/Spotify/spot-NoScrollAd.js`，同上 |
| `quanx/rewrite/spotify/js/spot-gabo.qx.js` | 上游 `Scripts/Spotify/spot-gabo.js`，改成 QuanX `script-echo-response` 的 `$done` 格式 |
| `quanx/rewrite/spotify/js/spot-del-etag.qx.js` | 转换时新增，对应原插件 `header-del if-none-match` 重写，上游无此文件 |
| Premium 补丁（本地版/远程版） | 未复制，`spotify.snippet` 里直接引用上游 `spot-proto-ev3.js` / `spot-proto-eevee.js`（原脚本本身已带 QuanX 判断） |

## 开关

QuanX 没有 Loon 的插件开关，`spotify.snippet` 里按原插件默认值写死：远程配置修改=关（用本地版补丁）、隐藏发现信息流/会员信息/AI DJ=全开。想改就按 snippet 里的注释把对应行注释/取消注释。

## 已知限制

- 音质不能设为“超高 / Very High”，需要真实 Premium（原插件本身的限制）。
- 还出广告时，先确认 MITM 对 `spclient.wg.spotify.com` 生效，并已退出重新登录。

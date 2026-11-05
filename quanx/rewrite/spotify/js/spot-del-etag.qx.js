/*
 * ============================================================
 * 来源声明 / Attribution
 * 原作者 / Original author: devchristian1337 (https://github.com/devchristian1337)
 * 原项目 / Upstream project: https://github.com/devchristian1337/loon-plugins
 * 原插件 / Original plugin: Plugins/Spotify.lpx
 * 本文件为转换时新增的小脚本（对应原插件的 header-del if-none-match 重写），上游无此文件。
 * New helper written for this conversion (replaces the Loon header-del rewrite); no upstream counterpart.
 * 原项目 README 声明许可 / License as declared in upstream README: MIT License
 * 本文件由 quietmodem 将原 Loon 脚本转换为 Quantumult X 版本，仅修改了与 QuanX
 * 的数据读写方式（$response.bodyBytes / $done 格式），核心处理逻辑未改动。
 * Converted to Quantumult X by quietmodem. Only the QuanX I/O was adapted;
 * the original processing logic is unchanged. Not an official QuanX
 * version by the original author. For personal use only.
 * ============================================================
 */
var headers = $request.headers;
delete headers["If-None-Match"];
delete headers["if-none-match"];
delete headers["IF-NONE-MATCH"];
$done({ headers: headers });

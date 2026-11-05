/*
 * ============================================================
 * 来源声明 / Attribution
 * 原作者 / Original author: devchristian1337 (https://github.com/devchristian1337)
 * 原项目 / Upstream project: https://github.com/devchristian1337/loon-plugins
 * 原插件 / Original plugin: Plugins/Spotify.lpx
 * 原脚本 / Original script: Scripts/Spotify/spot-gabo.js
 * 原项目 README 声明许可 / License as declared in upstream README: MIT License
 * 本文件由 quietmodem 将原 Loon 脚本转换为 Quantumult X 版本，仅修改了与 QuanX
 * 的数据读写方式（$response.bodyBytes / $done 格式），核心处理逻辑未改动。
 * Converted to Quantumult X by quietmodem. Only the QuanX I/O was adapted;
 * the original processing logic is unchanged. Not an official QuanX
 * version by the original author. For personal use only.
 * ============================================================
 */
console.log("Auto-generated gabo response");
$done({
  status: "HTTP/1.1 200 OK",
  headers: {
    "cache-control": "no-cache",
    "content-length": "0",
    "server-timing": "edge;dur=666",
    "strict-transport-security": "max-age=31536000",
    "x-content-type-options": "nosniff",
    "alt-svc": 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    "date": new Date().toUTCString(),
    "server": "envoy",
    "via": "HTTP/2 edgeproxy, 1.1 google"
  },
  body: ""
});

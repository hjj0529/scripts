let obj = {
  "ad_code": -41,
  "show_type": 0,
  "ads": []
};
$done({
  status: "HTTP/1.1 200 OK",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(obj)
});

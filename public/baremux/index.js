"use strict";
(() => {
  self.__uv$bypass = async (req, res) => {
    const headers = new Headers(res.headers);
    headers.set("x-baremux", "true");
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers,
    });
  };
})();
"use strict";
(() => {
  self.__uv$epoxy = async (req, res) => {
    const headers = new Headers(res.headers);
    headers.set("x-epoxy", "true");
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers,
    });
  };
})();
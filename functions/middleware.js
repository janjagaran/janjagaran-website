export const onRequest = async ({ request, next }) => {
  const res = await next();
  const contentType = res.headers.get("content-type") || "";

  // Only modify HTML
  if (!contentType.includes("text/html")) return res;

  let html = await res.text();

  const injection = `
<style>
  html, body, * { user-select: none !important; }
  img, video { user-drag: none !important; -webkit-user-drag: none !important; }
</style>
<script>
(function(){
  function block(e){ e.preventDefault(); e.stopImmediatePropagation(); return false; }

  const events = ["copy","cut","contextmenu","selectstart","dragstart"];
  events.forEach(ev => window.addEventListener(ev, block, true));

  window.addEventListener("mousedown", e => {
    if (e.button === 2) block(e);
  }, true);

  window.addEventListener("keydown", e => {
    const key = (e.key || "").toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;
    if (ctrl && ["c","x","s","u","a","p","i"].includes(key)) return block(e);
    if (e.keyCode === 123) return block(e);
    if (ctrl && e.shiftKey && ["i","j","k"].includes(key)) return block(e);
  }, true);

  document.addEventListener("dblclick", block, true);

  setInterval(() => {
    const sel = window.getSelection();
    if (sel && sel.toString().length) sel.removeAllRanges();
  }, 150);

  document.documentElement.setAttribute("oncontextmenu", "return false");
})();
</script>
`;

  if (html.includes("</head>")) {
    html = html.replace("</head>", injection + "</head>");
  } else if (html.includes("</body>")) {
    html = html.replace("</body>", injection + "</body>");
  } else {
    html = injection + html;
  }

  const newHeaders = new Headers(res.headers);
  newHeaders.delete("content-length");

  return new Response(html, {
    status: res.status,
    headers: newHeaders,
  });
};

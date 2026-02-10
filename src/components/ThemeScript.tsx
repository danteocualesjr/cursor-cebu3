const STORAGE_KEY = "cursor-cebu-theme";

export default function ThemeScript() {
  const script = `
    (function() {
      var stored = localStorage.getItem("${STORAGE_KEY}");
      var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      var theme = stored === "light" || stored === "dark" ? stored : (prefersLight ? "light" : "dark");
      document.documentElement.setAttribute("data-theme", theme);
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

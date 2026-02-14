export default function () {
  window.__mountVendors = async () => {
    try {
      // 예: frontend/node_modules/@vendor/quasar/index.esm.js
      // 예: frontend/node_modules/@vendor/datatable/index.esm.js
      const quasar = await import("@vendor/quasar/index.esm.js");
      const datatable = await import("@vendor/datatable/index.esm.js");

      const qHost = document.getElementById("quasar-host");
      const dHost = document.getElementById("datatable-host");

      if (qHost && quasar.mount) quasar.mount(qHost, "from nuxt2");
      if (dHost && datatable.mount) datatable.mount(dHost);
    } catch (e) {
      // dist 로딩/번들 충돌 확인용 로그
      // eslint-disable-next-line no-console
      console.error("Vendor mount failed:", e);
    }
  };
}

export default {
  ssr: false,
  target: "static",

  plugins: [{ src: "~/plugins/vendor-mount.client.js", mode: "client" }],

  build: {
    extend(config) {
      const stripCompileTypeFromCssLoader = (useItem) => {
        if (!useItem) return;

        // useItem 형태 정규화
        const item = typeof useItem === "string" ? { loader: useItem } : useItem;
        if (!item.loader || !item.loader.includes("css-loader")) return;

        const opt = item.options;
        if (opt && opt.modules && opt.modules.compileType) {
          // ✅ 핵심: css-loader 3.x에서 invalid인 옵션 제거
          delete opt.modules.compileType;
        }
      };

      const visitRule = (rule) => {
        if (!rule) return;

        // Nuxt는 rule.oneOf/use/loader 등이 섞여있음
        if (rule.use) {
          if (Array.isArray(rule.use)) rule.use.forEach(stripCompileTypeFromCssLoader);
          else stripCompileTypeFromCssLoader(rule.use);
        }

        if (rule.oneOf) rule.oneOf.forEach(visitRule);
        if (rule.rules) rule.rules.forEach(visitRule);
      };

      (config.module && config.module.rules || []).forEach(visitRule);
    }
  }
};
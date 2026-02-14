export default {
  ssr: false,            // SPA로 테스트 (충돌 테스트에 유리)
  target: "static",

  // vendor dist를 브라우저에서만 mount 하게(서버에서 window 접근 방지)
  plugins: [
    { src: "~/plugins/vendor-mount.client.js", mode: "client" }
  ],

  // (선택) 외부 dist CSS를 static에 둔 뒤 여기서 로드 가능
  // css: ["~/assets/vendor.css"]
};

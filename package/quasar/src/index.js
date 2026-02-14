// Quasar 0.xx에서 실제 컴포넌트를 내보내는 느낌만 재현
export function mount(el, text = "hello") {
  el.innerHTML = `<div class="q-pa-md">Dummy Quasar bundle: ${text}</div>`;
}

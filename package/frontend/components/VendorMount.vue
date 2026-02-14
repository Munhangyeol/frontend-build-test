<template>
  <div>
    <h3 style="margin-top:16px;">Vendor Mount Targets</h3>

    <div
      id="quasar-host"
      style="margin-top:12px; padding:12px; border:1px solid #ddd;"
    >
      quasar mount target
    </div>

    <div
      id="datatable-host"
      style="margin-top:12px; padding:12px; border:1px solid #ddd;"
    >
      datatable mount target
    </div>
  </div>
</template>

<script>
export default {
  name: "VendorMount",
  mounted() {
    // plugins/vendor-mount.client.js에서 window에 mount 함수를 심어두면 여기서 호출 가능
    if (window.__mountVendors) {
      window.__mountVendors();
    }
  }
};
</script>

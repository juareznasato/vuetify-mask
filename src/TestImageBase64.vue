<template>
  <div>
    <v-text-field-imagebase64
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        disabled: false,
        outlined: true,
        clearable: true,
        placeholder: ' ',
        prependIcon:'mdi-upload'
      }"
      v-bind:options="{
        outputMask: '########',
        empty: null,
        applyAfter: true,
      }"
    />
    v-model:
    {{
      value !== null && value !== ""
        ? value
        : value === null
        ? "null"
        : value === ""
        ? "''"
        : ""
    }}
  </div>
</template>

<script>
import ImageBase64 from "@/components/ImageBase64.vue";

export default {
  components: {
    "v-text-field-imagebase64": ImageBase64,
  },
  data: () => ({
    value: "82515260", // 1.23 or "1.23" or "" or null
    label: "Select image",
  }),
};
</script>

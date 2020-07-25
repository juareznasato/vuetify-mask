<template>
  <div>
    <v-text-field-common
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        prefix: '',
        suffix: '',
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        humanMask: '##-####-####-###',
        machineMask: '##-####-####-###',
        empty: null,
        applyAfter: false,
        alphanumeric: true,
        lowerCase: false,
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
import Common from "@/components/Common.vue";

export default {
  components: {
    "v-text-field-common": Common,
  },
  data: () => ({
    value: "23-A568-B953-356", // 1.23 or "1.23" or "" or null
    label: "Common",
  }),
};
</script>

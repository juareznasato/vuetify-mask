<template>
  <div>
    <v-text-field-percent
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        suffix: '%',
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        humanMask: '#00,00',
        machineMask: '#00.00',
        empty: null,
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
import Money from "@/components/Money.vue";

export default {
  components: {
    "v-text-field-percent": Money,
  },
  data: () => ({
    value: "34.20", // 1.23 or "1.23" or "" or null
    label: "Percent",
  }),
};
</script>

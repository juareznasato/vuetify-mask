<template>
  <div>
    <v-text-field-percent
      v-model="value"
      v-bind:label="label"
      v-bind:properties="properties"
      v-bind:options="options"
    />
    v-model: {{ (value !== null && value !== "") ? value : (value === null ? "null" : value === "" ? "''" : "") }}
  </div>
</template>

<script>
import Money from "@/components/Money.vue";

export default {
  components: {
    "v-text-field-percent": Money,
  },
  data: () => ({
    value: "34.20",            // 1.23 or "1.23" or "" or null
    label: "Percent",
    properties: {
      suffix: "%",
      readonly: false,
      disabled: false,
      outlined: false,
      clearable: true,
      placeholder: " ",
      // ...
      // ...
      // You can put other v-text-field properties here
    },
    options: {
      humanMask: "#00,00",    // Formated value in v-text-field
      machineMask: "#00.00",  // Formated value in v-model
      empty: null,            // v-model value when v-text-field is empty. You can use "0" or "" or null or other.
    },
  }),
};
</script>

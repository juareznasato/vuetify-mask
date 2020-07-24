<template>
  <div>
    <v-text-field-common
      v-model="value"
      v-bind:label="label"
      v-bind:properties="properties"
      v-bind:options="options"
    />
    v-model: {{ value }}
    <br />
    v-model null: {{ value === null ? "null" : "not null" }}
    <br />
    v-model empty: {{ value === "" ? "empty" : "not empty" }}
    <br />
  </div>
</template>

<script>
import Common from "@/components/Common.vue";

export default {
  components: {
    "v-text-field-common": Common,
  },
  data: () => ({
    value: "23-A568-B953-356",            // 1.23 or "1.23" or "" or null
    label: "Common",
    properties: {
      prefix: "",
      suffix: "",
      readonly: false,
      disabled: false,
      outlined: true,
      clearable: true,
      placeholder: " ",
      // ...
      // ...
      // You can put other v-text-field properties here
    },
    options: {
      humanMask: "##-####-####-###",    // Formated value in v-text-field
      machineMask: "##-####-####-###",  // Formated value in v-model
      empty: null,                      // v-model value when v-text-field is empty. You can use "0" or "" or null or other.
      applyAfter: false,                // Apply the mask only after filling
      alphanumeric: true,               // Numeric or Alphanumeric
      lowerCase: false,                 // Default uppercase
    },
  }),
};
</script>

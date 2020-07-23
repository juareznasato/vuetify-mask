<template>
  <div>
    <v-text-field-integer
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
import Integer from "@/components/Integer.vue";

export default {
  components: {
    "v-text-field-integer": Integer,
  },
  data: () => ({
    value: "123456789",            // 123 or "123" or "" or null
    label: "Integer",
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
      humanMask: "#########",    // Formated value in v-text-field
      machineMask: "#########",    // Formated value in v-model
      empty: null,                  // v-model value when v-text-field is empty. You can use "0" or "" or null or other.
      applyAfter: false,           // Apply the mask only after filling
    },
  }),
};
</script>

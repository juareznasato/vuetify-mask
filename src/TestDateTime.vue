<template>
  <div>
    <v-text-field-datetime
      v-model="value"
      v-bind:label="label"
      v-bind:properties="properties"
      v-bind:options="options"
    />
    v-model: {{ (value !== null && value !== "") ? value + " (milliseconds)" : (value === null ? "null" : value === "" ? "''" : "") }}
  </div>
</template>

<script>
import DateTime from "@/components/DateTime.vue";

export default {
  components: {
    "v-text-field-datetime": DateTime,
  },
  data: () => ({
    value: "1595386800000",              // Timestamp
    label: "DateTime",
    properties: {
      readonly: false,
      disabled: false,
      outlined: false,
      clearable: true,
      placeholder: "DD/MM/YYYY",
      "prepend-icon": "mdi-calendar"
      // ...
      // ...
      // You can put other v-text-field properties here
    },
    options: {
      humanMask: "DD/MM/YYYY", // Formated value in v-text-field
      empty: null,             // v-model value when v-text-field is empty. You can use "0" or "" or null or other.
    },
  }),
};
</script>

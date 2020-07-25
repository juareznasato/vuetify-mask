<template>
  <div>
    <v-text-field-cnpj
      v-model="value"
      v-bind:label="label"
      v-bind:properties="properties"
      v-bind:options="options"
    />
    v-model: {{ (value !== null && value !== "") ? value : (value === null ? "null" : value === "" ? "''" : "") }}
  </div>
</template>

<script>
import Cnpj from "@/components/Cnpj.vue";

export default {
  components: {
    "v-text-field-cnpj": Cnpj,
  },
  data: () => ({
    value: "50703512000192",            // 123 or "123" or "" or null
    label: "CNPJ (Brazilian mask)",
    properties: {
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
      machineMask: "##############",    // Formated value in v-model
      empty: null,                      // v-model value when v-text-field is empty. You can use "0" or "" or null or other.
      applyAfter: true,                 // Apply the mask only after filling
    },
  }),
};
</script>

<template>
  <div>
    <v-text-field-cep
      v-model="value"
      v-bind:label="label"
      v-bind:properties="properties"
      v-bind:options="options"
    />
    v-model: {{ (value !== null && value !== "") ? value : (value === null ? "null" : value === "" ? "''" : "") }}
  </div>
</template>

<script>
import Cep from "@/components/Cep.vue";

export default {
  components: {
    "v-text-field-cep": Cep,
  },
  data: () => ({
    value: "82515260", // 1.23 or "1.23" or "" or null
    label: "CEP (Brazilian mask)",
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
      machineMask: "########", // Formated value in v-model
      empty: null, // v-model value when v-text-field is empty. You can use "0" or "" or null or other.
      applyAfter: true, // Apply the mask only after filling
    },
  }),
};
</script>

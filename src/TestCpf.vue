<template>
  <div>
    <v-text-field-cpf
      v-model="value"
      v-bind:label="label"
      v-bind:properties="properties"
      v-bind:options="options"
    />
    v-model: {{ (value !== null && value !== "") ? value : (value === null ? "null" : value === "" ? "''" : "") }}
  </div>
</template>

<script>
import Cpf from "@/components/Cpf.vue";

export default {
  components: {
    "v-text-field-cpf": Cpf,
  },
  data: () => ({
    value: "97702036028",            // 123 or "123" or "" or null
    label: "CPF (Brazilian mask)",
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
      machineMask: "###########",     // Formated value in v-model
      empty: null,                    // v-model value when v-text-field is empty. You can use "0" or "" or null or other.
      applyAfter: true,               // Apply the mask only after filling
    },
  }),
};
</script>

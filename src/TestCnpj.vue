<template>
  <div>
    <v-text-field-cnpj
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        disabled: false,
        outlined: true,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        outputMask: '##############',
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
import Cnpj from "@/components/Cnpj.vue";

export default {
  components: {
    "v-text-field-cnpj": Cnpj,
  },
  data: () => ({
    value: "50703512000192", // 123 or "123" or "" or null
    label: "CNPJ (Brazilian mask)",
  }),
};
</script>

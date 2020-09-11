<template>
  <div>
    <v-text-field-cpf
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        readonly: false,
        disabled: false,
        outlined: true,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        outputMask: '###########',
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
import Cpf from "@/components/Cpf.vue";

export default {
  components: {
    "v-text-field-cpf": Cpf,
  },
  data: () => ({
    value: "97702036028", // 123 or "123" or "" or null
    label: "CPF (Brazilian mask)",
  }),
};
</script>

  // 'append-icon': value ? 'mdi-check-circle' : 'mdi-minus-circle',
  // success: value ? true : false

  // or

  // v-bind:properties="{
  //   readonly: false,
  //   disabled: false,
  //   outlined: true,
  //   clearable: true,
  //   placeholder: '',
  //   'append-icon': appendIcone(),
  //   success: success(),
  //   error: !success()
  // }"

  // methods: {
  //   appendIcone() {
  //     if (this.value) {
  //       return "mdi-check-circle";
  //     } else {
  //       return "mdi-minus-circle";
  //     }
  //   },
  //   success() {
  //     if (this.value) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // }

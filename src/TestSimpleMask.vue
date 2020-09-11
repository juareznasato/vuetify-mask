<template>
  <div>
    <v-text-field-simplemask
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        prefix: '',
        suffix: '',
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        inputMask: '##-####-####-###',
        outputMask: '##-####-####-###',
        empty: null,
        applyAfter: false,
        alphanumeric: true,
        lowerCase: false,
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
import SimpleMask from "@/components/SimpleMask.vue";

export default {
  components: {
    "v-text-field-simplemask": SimpleMask,
  },
  data: () => ({
    value: "23-A568-B953-356", // 1.23 or "1.23" or "" or null
    label: "Simple Mask",
  }),
};
</script>

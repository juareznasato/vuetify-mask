<template>
  <div>
    <v-text-field-dotnumber
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        length: 20,
        empty: null,
        applyAfter: false,
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
import DotNumber from "@/components/DotNumber.vue";

export default {
  components: {
    "v-text-field-dotnumber": DotNumber,
  },
  data: () => ({
    value: "1.23.456.789", // 123 or "123" or "" or null
    label: "Only Dot and Number",
  }),
};
</script>

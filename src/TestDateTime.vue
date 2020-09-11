<template>
  <div>
    <v-text-field-datetime
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: 'YYYY-MM-DD HH:mm:ss',
        'prepend-icon': 'mdi-calendar',
      }"
      v-bind:options="{
        inputMask: 'YYYY-MM-DD HH:mm:ss',
        empty: null,
      }"
    />
    v-model:
    {{
      value !== null && value !== ""
        ? value + " (milliseconds)"
        : value === null
        ? "null"
        : value === ""
        ? "''"
        : ""
    }}
  </div>
</template>

<script>
import DateTime from "@/components/DateTime.vue";

export default {
  components: {
    "v-text-field-datetime": DateTime,
  },
  data: () => ({
    value: "1595386800000", // Milliseconds
    label: "DateTime",
  }),
};
</script>

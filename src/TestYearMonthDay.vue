<template>
  <div>
    <v-text-field-yearmonthday
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        prefix: '',
        suffix: '',
        readonly: false,
        disabled: false,
        outlined: true,
        clearable: false,
        placeholder: '',
      }"
      v-bind:options="{
        empty: null,
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
import YearMonthDay from "@/components/YearMonthDay.vue";

export default {
  components: {
    "v-text-field-yearmonthday": YearMonthDay,
  },
  data: () => ({
    value: "23-A568-B953-356", // 1.23 or "1.23" or "" or null
    label: "Simple Mask",
  }),
};
</script>

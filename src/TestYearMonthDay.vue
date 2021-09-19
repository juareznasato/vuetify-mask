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
        persistentPlaceholder:true,
      }"
      v-bind:options="{
        empty: '',
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
    value: {year: "", month: "", startDay: "", finishDay: ""},
    label: {year: "Year", month: "Month", startDay: "Start Day", finishDay: "Finish Day"},
  }),
};
</script>

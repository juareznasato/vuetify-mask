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
    value: {year: "2021", month: "2", startDay: "1", finishDay: "31"},
    label: {year: "Ano", month: "Mês", startDay: "Dia Inicial", finishDay: "Dia Final"},
  }),
};
</script>

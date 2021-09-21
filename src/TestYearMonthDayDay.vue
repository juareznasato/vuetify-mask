<template>
  <div>
    <v-text-field-yearmonthdayday
      v-model="value"
      v-bind:label="label"
      v-bind:placeholder= "placeholder"
      v-bind:properties="{
        prefix: '',
        suffix: '',
        readonly: false,
        disabled: false,
        outlined: true,
        clearable: false,
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
import YearMonthDayDay from "@/components/YearMonthDayDay.vue";

export default {
  components: {
    "v-text-field-yearmonthdayday": YearMonthDayDay,
  },
  data: () => ({
    value: "",
    label: "Ano;Mes;DiaInicial;DiaFinal;",
    placeholder: "AAAA;MM;DD;DD;",
  }),
};
</script>

<template>
  <div>
    <v-text-field-money-locale
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        prefix: 'R$',
        readonly: false,
        disabled: disabled,
        outlined: false,
        clearable: true,
        placeholder: ' ',
      }"
      v-bind:options="{
        locale: 'pt-BR',
        length: 11,
        precision: 6,
        empty: null,
      }"
      ref="ref"
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
    <v-btn v-on:click="$refs.ref.focus()">Focus</v-btn>
    <v-btn v-on:click="disabled = !disabled">{{ disabled ? "Enabled" : "Disabled" }}</v-btn>
  </div>
</template>

<script>
import MoneyLocale from "@/components/MoneyLocale.vue";

export default {
  components: {
    "v-text-field-money-locale": MoneyLocale,
  },
  data: () => ({
    value: 123456789.123000, // 1.23 or "1.23" or "" or null
    label: "Money Locale",
    disabled: false,
  }),
};
</script>

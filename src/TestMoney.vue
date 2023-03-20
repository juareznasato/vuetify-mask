<template>
  <div>
    <v-text-field-money
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        prefix: 'R$',
        readonly: false,
        disabled: disabled,
        outlined: false,
        clearable: true,
        placeholder: ' '
      }"
      v-bind:options="{
        locale: 'pt-BR',
        length: 11,
        precision: 2,
        empty: null,
        allowNegative
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
    <br />
    <v-btn v-on:click="$refs.ref.focus()" small>Focus</v-btn>
    <v-btn v-on:click="disabled = !disabled" small>{{
      disabled ? "Enabled" : "Disabled"
    }}</v-btn>
    <v-btn v-on:click="allowNegative = !allowNegative" small>
      {{ allowNegative ? "Disallow negative" : "Allow negative" }}
    </v-btn>
  </div>
</template>

<script>
import Money from "@/components/Decimal.vue";

export default {
  components: {
    "v-text-field-money": Money
  },
  data: () => ({
    value: 123456789.0, // 1.23 or "1.23" or "" or null
    label: "Money",
    disabled: false,
    allowNegative: false
  })
};
</script>

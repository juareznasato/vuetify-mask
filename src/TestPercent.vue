<template>
  <div>
    <v-text-field-percent
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        suffix: '%',
        readonly: false,
        disabled: disabled,
        outlined: false,
        clearable: true,
        placeholder: ''
      }"
      v-bind:options="{
        locale: 'pt-BR',
        length: 3,
        precision: 2,
        empty: null,
        allowNegative
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

    <br />

    <v-btn
      v-on:click="disabled = !disabled"
      x-small
      class="mr-1"
      depressed
      outlined
      >{{ disabled ? "Enabled" : "Disabled" }}</v-btn
    >
    <v-btn
      v-on:click="allowNegative = !allowNegative"
      x-small
      class="mr-1"
      depressed
      outlined
    >
      {{ allowNegative ? "Disallow negative" : "Allow negative" }}
    </v-btn>
  </div>
</template>

<script>
import Money from "@/components/Decimal.vue";

export default {
  components: {
    "v-text-field-percent": Money
  },
  data: () => ({
    value: "34.20", // 1.23 or "1.23" or "" or null
    label: "Percent",
    disabled: false,
    allowNegative: false
  })
};
</script>

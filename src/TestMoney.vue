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
        placeholder: ' ',
      }"
      v-bind:options="{
        humanMask: '###.###.##0,00',
        machineMask: '########0.00',
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
    <v-btn v-on:click="disabled = !disabled">{{
      disabled ? "Enabled" : "Disabled"
    }}</v-btn>
  </div>
</template>

<script>
import Money from "@/components/Money.vue";

export default {
  components: {
    "v-text-field-money": Money,
  },
  data: () => ({
    value: "123456789.00", // 1.23 or "1.23" or "" or null
    label: "Money",
    disabled: false,
  }),
};
</script>

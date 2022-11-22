<template>
  <div>
    <v-text-field-negative-money
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        prefix: 'R$ ' + signal,
        readonly: false,
        disabled: disabled,
        outlined: false,
        clearable: true,
        placeholder: ' ',
      }"
      v-bind:options="{
        locale: 'pt-BR',
        length: 11,
        precision: 2,
        empty: null,
      }"
      v-on:signal="signal = $event"
      ref="ref"
    />
    v-model:
    {{ value !== null && value !== "" ? value : value === null ? "null" : value === "" ? "''" : "" }}<br />
    signal: {{ signal }}
  </div>
</template>

<script>
import NegativeMoney from "@/components/NegativeDecimal.vue";

export default {
  components: {
    "v-text-field-negative-money": NegativeMoney,
  },
  data: () => ({
    value: -123456789.0, // 1.23 or "1.23" or "" or null
    label: "Negative Money",
    disabled: false,
    signal: "",
  }),
};
</script>

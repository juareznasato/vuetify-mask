<template>
  <div>
    <v-text-field
      v-model="cmpValue"
      v-bind:label="label"
      v-bind="properties"
      v-bind:maxlength="inputMask.length"
      v-bind:append-icon="options.applyAfter && value ? 'mdi-check-circle' : ''"
      v-bind:success="options.applyAfter && value ? true : false"
      v-on:keypress="keyPress"
      v-on:blur="$emit('blur')"
      v-on:change="$emit('change')"
      v-on:click="$emit('click')"
      v-on:focus="$emit('focus')"
      v-on:keydown="$emit('keydown')"
      v-on:mousedown="$emit('mousedown')"
      v-on:mouseup="$emit('mouseup')"
      ref="ref"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  model: { prop: "value", event: "input" },
  props: {
    value: {
      type: [String, Number],
      default: "0",
    },
    label: {
      type: String,
      default: "",
    },
    properties: {
      type: Object,
      default: function() {
        return {};
      },
    },
    options: {
      type: Object,
      default: function() {
        return {
          outputMask: "##############",
          empty: "",
          applyAfter: false,
        };
      },
    },
  },
  data: () => ({
    inputMask: "##.###.###/####-##",
  }),
  /*
   v-model="cmpValue": Dessa forma, ao digitar, o valor é atualizado automaticamente no componente pai.
   O valor digitado entra pelo newValue do Set é emitido para o componente pai, retorna pelo get e pára.
  */
  computed: {
    cmpValue: {
      get: function() {
        return this.humanFormat(this.value);
      },
      set: function(newValue) {
        this.$emit("input", this.machineFormat(newValue));
      },
    },
  },
  watch: {},
  methods: {
    humanFormat: function(value) {
      if (value) {
        value = this.formatValue(value, this.inputMask);
      } else {
        value = this.options.empty;
      }
      return value;
    },

    machineFormat(value) {
      if (value) {
        value = this.formatValue(value, this.options.outputMask);
        if (value === "") {
          value = this.options.empty;
        }
        // Apply the mask only only after filling
        if (this.options.applyAfter) {
          if (value.length !== this.options.outputMask.length) {
            value = this.options.empty;
          } else {
            if (!this.validateCnpj(value)) {
              value = this.options.empty;
            } else {
              // Event sended after filling the mask
              this.$emit("masked");
            }
          }
        }
      } else {
        value = this.options.empty;
      }
      return value;
    },

    formatValue: function(value, mask) {
      return this.formatCnpj(value, mask);
    },

    formatCnpj: function(value, mask) {
      value = this.clearValue(value);
      let result = "";
      let count = 0;
      if (value) {
        let arrayValue = value.toString().split("");
        let arrayMask = mask.toString().split("");
        for (var i = 0; i < arrayMask.length; i++) {
          if (i < arrayValue.length + count) {
            if (arrayMask[i] === "#") {
              result = result + arrayValue[i - count];
            } else {
              result = result + arrayMask[i];
              count++;
            }
          }
        }
      }
      return result;
    },

    keyPress($event) {
      // console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      // if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
      if (keyCode < 48 || keyCode > 57) {
        // 46 is dot
        $event.preventDefault();
      }
    },

    clearValue: function(value) {
      let result = "";
      if (value) {
        let arrayValue = value.toString().split("");
        for (var i = 0; i < arrayValue.length; i++) {
          if (this.isInteger(arrayValue[i])) {
            result = result + arrayValue[i];
          }
        }
      }
      return result;
    },

    isInteger(value) {
      let result = false;
      if (Number.isInteger(parseInt(value))) {
        result = true;
      }
      return result;
    },

    focus() {
      setTimeout(() => {
        this.$refs.ref.focus();
      }, 500);
    },

    validateCnpj: function(cnpj) {
      cnpj = cnpj.replace(/[^\d]+/g, "");
      if (cnpj == "") return false;
      if (cnpj.length != 14) return false;
      // Elimina CNPJs invalidos conhecidos
      if (
        cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999"
      )
        return false;
      // Valida DVs
      let tamanho = cnpj.length - 2;
      let numeros = cnpj.substring(0, tamanho);
      let digitos = cnpj.substring(tamanho);
      let soma = 0;
      let pos = tamanho - 7;
      for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
      }
      let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      if (resultado != digitos.charAt(0)) return false;
      tamanho = tamanho + 1;
      numeros = cnpj.substring(0, tamanho);
      soma = 0;
      pos = tamanho - 7;
      for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      if (resultado != digitos.charAt(1)) return false;
      return true;
    },
  },
};
</script>

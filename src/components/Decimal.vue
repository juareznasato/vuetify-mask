<template>
  <div>
    <v-text-field
      v-model="cmpValue"
      v-bind:label="label"
      v-bind="properties"
      v-bind:maxlength="maxLength"
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
      default: "0"
    },
    label: {
      type: String,
      default: ""
    },
    properties: {
      type: Object,
      default: function() {
        return {};
      }
    },
    options: {
      type: Object,
      default: function() {
        return {
          locale: "pt-BR",
          length: 11,
          precision: 2,
          empty: null,
          allowNegative: false
        };
      }
    }
  },
  data: () => ({}),
  /*
   v-model="cmpValue": Dessa forma, ao digitar, o valor é atualizado automaticamente no componente pai.
   O valor digitado entra pelo newValue do Set é emitido para o componente pai, retorna pelo get e pára.
  */
  computed: {
    allowNegative() {
      return this.options.allowNegative;
    },
    cmpValue: {
      get: function() {
        return this.humanFormat(this.value);
      },
      set: function(newValue) {
        this.$emit("input", this.machineFormat(newValue));
      }
    },
    maxLength() {
      if (this.allowNegative) {
        return this.options.length + this.options.precision + 1;
      }

      return this.options.length + this.options.precision;
    }
  },
  watch: {},
  methods: {
    humanFormat: function(value) {
      if (value || value === 0) {
        value = Number(value).toLocaleString(this.options.locale, {
          maximumFractionDigits: this.options.precision,
          minimumFractionDigits: this.options.precision
        });
      } else {
        value = this.options.empty;
      }

      return value;
    },
    machineFormat(value) {
      if (value || (this.allowNegative && Object.is(value, -0))) {
        value = this.clearNumber(value);
        value = this.fillZeros(value);
        value = this.insertPoint(value);

        if (value === "") {
          value = this.options.empty;
        }
      } else {
        value = this.options.empty;
      }
      return value;
    },
    // Ajustar quantidade de zeros à esquerda
    fillZeros(value) {
      let result = "";

      if (
        this.allowNegative &&
        (value.startsWith("-") || Object.is(value, -0))
      ) {
        result = value.substring(1, value.length);
        result = result.padStart(parseInt(this.options.precision) + 1, "0");
        result = "-" + result;
      } else {
        result = value.padStart(parseInt(this.options.precision) + 1, "0");
      }

      return result;
    },

    // Incluir ponto na casa correta, conforme a precisão configurada
    insertPoint(value) {
      let result = "";

      result =
        value.substring(0, value.length - parseInt(this.options.precision)) +
        "." +
        value.substring(
          value.length - parseInt(this.options.precision),
          value.length
        );

      return result;
    },

    // Retira todos os caracteres não numéricos e zeros à esquerda
    clearNumber: function(value) {
      const isNegativeZero = Object.is(value, -0);
      let result = "";
      if (value || (this.allowNegative && isNegativeZero)) {
        let flag = false;
        let arrayValue;
        if (this.allowNegative && isNegativeZero) {
          arrayValue = ["-", "0"];
        } else {
          arrayValue = value.toString().split("");
        }
        for (var i = 0; i < arrayValue.length; i++) {
          if (this.isInteger(arrayValue[i])) {
            if (!flag) {
              // Retirar zeros à esquerda
              if (arrayValue[i] !== "0") {
                result = result + arrayValue[i];
                flag = true;
              } else {
                // Permitir zero quando valor igual a zero - Tipo 3 (Money or Percent)
                if (Number(value) === 0) {
                  result = result + arrayValue[i];
                }
              }
            } else {
              result = result + arrayValue[i];
            }
            // allow negative numbers to be passed
            // when the first char is '-'
          } else if (this.allowNegative && i === 0 && arrayValue[0] === "-") {
            result = result + arrayValue[i];
          }
        }
      }
      return result;
    },
    keyPress($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;

      if (keyCode < 48 || keyCode > 57) {
        // 46 is dot!
        // 45 is minus!

        if (this.allowNegative && keyCode === 45) {
          let curVal = this.humanFormat(this.value);

          if (curVal == null) {
            this.cmpValue = -0;
          } else if (!curVal.includes("-")) {
            this.cmpValue = `-${curVal}`;
          }
        }
        $event.preventDefault();
      }
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
    }
  }
};
</script>

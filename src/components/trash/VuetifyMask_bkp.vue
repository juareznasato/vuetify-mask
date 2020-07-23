<template>
  <div>
    <v-text-field
      v-model="cmpValue"
      v-bind:label="label"
      v-bind="properties"
      v-bind:maxlength="options.humanMask.length"
      v-on:keypress="keyPress"
      v-on:blur="$emit('blur')"
      v-on:change="$emit('change')"
      v-on:click="$emit('click')"
      v-on:focus="$emit('focus')"
      v-on:keydown="$emit('keydown')"
      v-on:mousedown="$emit('mousedown')"
      v-on:mouseup="$emit('mouseup')"
    ></v-text-field>
  </div>
</template>

<script>
import moment from "moment";

const MASK_TYPE_DEFAULT = 1;
const MASK_TYPE_DEFAULT_INVERTED = 2;
const MASK_TYPE_MONEY_OR_PERCENT = 3;
const MASK_TYPE_DATETIME = 4;

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
          humanMask: "#########",
          machineMask: "#########",
          maskType: 1,
          empty: "",
          applyAfter: false,
        };
      },
    },
  },
  data: () => ({}),
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
  methods: {
    humanFormat: function(value) {
      if (value) {
        value = this.formatValue(value, this.options.humanMask);
      } else {
        value = this.options.empty;
      }
      return value;
    },

    machineFormat(value) {
      if (value) {
        value = this.formatValue(value, this.options.machineMask);
        // If value is empty return value set for the user
        if (value === "") {
          value = this.options.empty;
        }
        // Apply the mask only only after filling
        if (this.options.applyAfter) {
          if (value.length !== this.options.machineMask.length) {
            value = this.options.empty;
          }
        }
      } else {
        value = this.options.empty;
      }
      return value;
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

    // Remove tudo o que for diferente de letras e numeros
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

    // Retira todos os caracteres não numéricos e zeros à esquerda
    clearNumber: function(value) {
      let result = "";
      if (value) {
        let flag = false;
        let arrayValue = value.toString().split("");
        for (var i = 0; i < arrayValue.length; i++) {
          if (this.isInteger(arrayValue[i])) {
            if (!flag) {
              // Retirar zeros à esquerda
              if (arrayValue[i] !== "0") {
                result = result + arrayValue[i];
                flag = true;
              } else {
                // Permitir zero quando valor igual a zero - Tipo 3 (Money or Percent)
                if (this.options.maskType === MASK_TYPE_MONEY_OR_PERCENT) {
                  if (Number(value) === 0) {
                    result = result + arrayValue[i];
                  }
                }
              }
            } else {
              result = result + arrayValue[i];
            }
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

    isAlphaNumeric(value) {
      let letterNumber = /^[0-9a-zA-Z]+$/;
      if (value.match(letterNumber)) {
        return true;
      }
      return false;
    },

    idDate(value, format) {
      let stringDate = moment(value, format).format("YYYY-MM-DD HH:mm:ss");
      if (moment(stringDate, "YYYY-MM-DD  HH:mm:ss").isValid()) {
        return true;
      } else {
        return false;
      }
    },

    toMillisecond: function(value) {
      return Date.parse(value);
    },

    formatValue: function(value, mask) {
      if (this.options.maskType === MASK_TYPE_DEFAULT) {
        return this.formatDefault(value, mask);
      }
      if (this.options.maskType === MASK_TYPE_DEFAULT_INVERTED) {
        return this.formatDefaultInverted(value, mask);
      }
      if (this.options.maskType === MASK_TYPE_MONEY_OR_PERCENT) {
        return this.formatMoneyOrPercent(value, mask);
      }
      if (this.options.maskType === MASK_TYPE_DATETIME) {
        return this.formatDate(value, mask);
      }
    },

    formatDefault: function(value, mask) {
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

    formatDefaultInverted: function(value, mask) {
      value = this.clearValue(value);
      let result = "";
      let count = 0;
      if (value) {
        let arrayValue = value
          .toString()
          .split("")
          .reverse()
          .join("");
        let arrayMask = mask
          .toString()
          .split("")
          .reverse()
          .join("");
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
      return result
        .split("")
        .reverse()
        .join("");
    },

    formatMoneyOrPercent: function(value, mask) {
      value = this.clearNumber(value);
      let result = "";
      let count = 0;
      if (value) {
        let arrayValue = value
          .toString()
          .split("")
          .reverse()
          .join("");
        let arrayMask = mask
          .toString()
          .split("")
          .reverse()
          .join("");
        for (var i = 0; i < arrayMask.length; i++) {
          if (i < arrayValue.length + count) {
            if (arrayMask[i] === "#" || arrayMask[i] === "0") {
              result = result + arrayValue[i - count];
            } else {
              result = result + arrayMask[i];
              count++;
            }
          } else {
            if (arrayMask[i] !== "#") {
              if (arrayMask[i] === "0") {
                result = result + arrayMask[i];
              } else {
                if (arrayMask[i + 1] === "0") {
                  result = result + arrayMask[i];
                }
              }
            }
          }
        }
      }
      result = result
        .split("")
        .reverse()
        .join("");
      return result;
    },

    formatDate: function(value, mask) {
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
  },
};
</script>

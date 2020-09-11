<template>
  <div>
    <v-text-field
      v-model="cmpValue"
      v-bind:label="label"
      v-bind="properties"
      v-bind:maxlength="options.inputMask.length"
      v-bind:append-icon="(value) ? 'mdi-check-circle' : ''"
      v-bind:success="(value) ? true : false"
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
import moment from "moment";

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
          inputMask: "YYYY-MM-DD HH:mm:ss",
          empty: "",
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
  watch: {
  },
  methods: {
    humanFormat: function(value) {
      if (value) {
        value = moment(this.toDate(this.toInteger(value))).format(
          this.options.inputMask
        );
      } else {
        value = this.options.empty;
      }
      return value;
    },

    machineFormat(value) {
      if (value) {
        value = this.formatValue(value, this.options.inputMask);
        if (value === "") {
          value = this.options.empty;
        } else {
          // Apply the mask only only after filling
          if (value.length !== this.options.inputMask.length) {
            value = this.options.empty;
          } else {
            let stringDate = moment(value, this.options.inputMask).format(
              "YYYY-MM-DD HH:mm:ss"
            );
            value = this.toMillisecond(stringDate);
            if (!value) {
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
      return this.formatDate(value, mask);
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
            if (
              arrayMask[i].toLowerCase().includes("y") ||
              arrayMask[i].toLowerCase().includes("m") ||
              arrayMask[i].toLowerCase().includes("d") ||
              arrayMask[i].toLowerCase().includes("h") ||
              arrayMask[i].toLowerCase().includes("m") ||
              arrayMask[i].toLowerCase().includes("s")
            ) {
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

    toInteger(value) {
      return Number.parseInt(value);
    },

    /* String Date to Milliseconds */
    toMillisecond: function(value) {
      return Date.parse(value);
    },

    /* Milliseconds to Date*/
    toDate: function(value) {
      return new Date(value); // Return String
    },

    focus() {
      setTimeout(() => {
        this.$refs.ref.focus();
      }, 500);
    },

  },
};
</script>

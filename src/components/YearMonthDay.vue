<template>
  <div>
    <template>
      <v-row dense>
        <v-col cols="12" sm="2" md="2">
          <v-text-field
            name="namYear"
            ref="refYear"
            v-model="year"
            v-bind:label="label"
            v-bind="properties"
            v-bind:maxlength="4"
            v-on:keypress="keyPress"
            v-on:blur="$emit('blur')"
            v-on:change="$emit('change')"
            v-on:click="$emit('click')"
            v-on:focus="$emit('focus')"
            v-on:keydown="$emit('keydown')"
            v-on:mousedown="$emit('mousedown')"
            v-on:mouseup="$emit('mouseup')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="10" md="2">
          <v-text-field
            name="namMonth"
            ref="refMonth"
            v-model="month"
            v-bind:label="label"
            v-bind="properties"
            v-bind:maxlength="2"
            v-on:keypress="keyPress"
            v-on:blur="$emit('blur')"
            v-on:change="$emit('change')"
            v-on:click="$emit('click')"
            v-on:focus="$emit('focus')"
            v-on:keydown="$emit('keydown')"
            v-on:mousedown="$emit('mousedown')"
            v-on:mouseup="$emit('mouseup')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="10" md="2">
          <v-text-field
            name="namStartDay"
            ref="refStartDay"
            v-model="month"
            v-bind:label="label"
            v-bind="properties"
            v-bind:maxlength="2"
            v-on:keypress="keyPress"
            v-on:blur="$emit('blur')"
            v-on:change="$emit('change')"
            v-on:click="$emit('click')"
            v-on:focus="$emit('focus')"
            v-on:keydown="$emit('keydown')"
            v-on:mousedown="$emit('mousedown')"
            v-on:mouseup="$emit('mouseup')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="10" md="2">
          <v-text-field
            name="namFinalDay"
            ref="refFinalDay"
            v-model="month"
            v-bind:label="label"
            v-bind="properties"
            v-bind:maxlength="2"
            v-on:keypress="keyPress"
            v-on:blur="$emit('blur')"
            v-on:change="$emit('change')"
            v-on:click="$emit('click')"
            v-on:focus="$emit('focus')"
            v-on:keydown="$emit('keydown')"
            v-on:mousedown="$emit('mousedown')"
            v-on:mouseup="$emit('mouseup')"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>
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
      default: function () {
        return {};
      },
    },
    options: {
      type: Object,
      default: function () {
        return {
          empty: "", // v-model value when v-text-field is empty. You can use "0" or "" or null or other.
        };
      },
    },
  },
  data: () => ({
    year: 2021,
    month: 2,
  }),
  methods: {
    keyPress($event) {
      if (!this.options.alphanumeric) {
        // console.log($event.keyCode); //keyCodes value
        let keyCode = $event.keyCode ? $event.keyCode : $event.which;
        // if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        if (keyCode < 48 || keyCode > 57) {
          // 46 is dot
          $event.preventDefault();
        }
      }
    },
  },
};
</script>
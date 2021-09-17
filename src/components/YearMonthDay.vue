<template>
  <div>
    <template>
      <v-row dense>
        <v-col cols="12" sm="2" md="2">
          <v-text-field
            name="namYear"
            ref="refYear"
            maxlength="4"
            v-model="value.year"
            v-bind:label="label.year"
            v-bind="properties"
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
            maxlength="2"
            v-model="value.month"
            v-bind:label="label.month"
            v-bind="properties"
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
            maxlength="2"
            v-model="value.startDay"
            v-bind:label="label.startDay"
            v-bind="properties"
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
            maxlength="2"
            v-model="value.finishDay"
            v-bind:label="label.finishDay"
            v-bind="properties"
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
      type: Object,
      default: function () {
        return {
          year: "",
          month: "",
          startDay: "",
          finishDay: "",
        };
      },
    },
    label: {
      type: Object,
      default: function () {
        return {
          year: "Year",
          month: "Month",
          startDay: "Start Day",
          finishDay: "Finish Day",
        };
      },
    },
    properties: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data: () => ({}),
  methods: {
    keyPress($event) {
      // console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      // if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
      if (keyCode < 48 || keyCode > 57) {
        // 46 is dot
        $event.preventDefault();
      }
    },
  },
};
</script>
<template>
  <div>
    <template>
      <v-row dense>
        <v-col cols="12" sm="2" md="4">
          <v-text-field
            name="namYear"
            ref="refYear"
            maxlength="4"
            v-model="value.year"
            v-bind:label="label.year"
            v-bind="properties"
            v-on:keypress="keyPress"
            v-on:keyup="keyUpYear"
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
            v-on:keyup="keyUpMonth"
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
            v-on:keyup="keyUpStartDay"
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
            ref="refFinishDay"
            maxlength="2"
            v-model="value.finishDay"
            v-bind:label="label.finishDay"
            v-bind="properties"
            v-on:keypress="keyPress"
            v-on:keyup="keyUpFinishDay"
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
import moment from "moment";

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
    keyUpYear() {
      if (this.value.year) {
      if (this.value.year.length === 4) {
        this.$refs.refMonth.focus();
      } else {
        if (this.value.year.length === 0) {
          this.value.year = null;  
        }
      }
      }
    },
    keyUpMonth() {
      if (this.value.year) {
        if ((Number(this.value.month) < 1) || (Number(this.value.month) > 12)) {
          this.value.month = null;
        } else {
          if (this.value.month.length === 2) {
            this.$refs.refStartDay.focus();    
          }
        }
      } else {
        this.value.month = null;
        this.$refs.refYear.focus();
      }
    },
    keyUpStartDay() {
      if (this.value.year) {
        if (this.value.month) {
          let m = moment(this.value.year +"-"+ this.value.month +"-"+ this.value.startDay, 'YYYY-MM-DD');
          if (!m.isValid()) {
            this.value.startDay = null;
          } else {
            if (this.value.startDay.length === 2) {
              this.$refs.refFinishDay.focus();
            } else {
              if (this.value.startDay.length === 0) {
                this.value.startDay = null;
              }
            }
          }
        } else {
          this.value.startDay = null;
          this.$refs.refMonth.focus();
        }
      } else {
        this.value.startDay = null;
        this.$refs.refYear.focus();
      }
    },
    keyUpFinishDay() {
      if (this.value.startDay) {
        let m = moment(this.value.year +"-"+ this.value.month +"-"+ this.value.finishDay, 'YYYY-MM-DD');
        if (!m.isValid()) {
          this.value.finishDay = "";
        } else {
          if (this.value.finishDay.length === 0) {
            this.value.finishDay = null;
          }
        }
      } else {
        this.value.finishDay = null;
        this.$refs.refStartDay.focus();
      }

    },
  },
};
</script>
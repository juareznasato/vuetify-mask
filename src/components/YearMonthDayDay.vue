<template>
  <div>
    <template>
      <v-row dense>
        <v-col cols="12" sm="2" md="4">
          <v-text-field
            name="namYear"
            ref="refYear"
            maxlength="4"
            v-model="year"
            v-bind:label="label.toString().split(';')[0]"
            v-bind:placeholder="placeholder.toString().split(';')[0]"
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
            v-model="month"
            v-bind:label="label.toString().split(';')[1]"
            v-bind:placeholder="placeholder.toString().split(';')[1]"
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
            v-model="startDay"
            v-bind:label="label.toString().split(';')[2]"
            v-bind:placeholder="placeholder.toString().split(';')[2]"
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
            v-model="finishDay"
            v-bind:label="label.toString().split(';')[3]"
            v-bind:placeholder="placeholder.toString().split(';')[2]"
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
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Year;Month;StartDay;FinishDay;",
    },
    placeholder: {
      type: String,
      default: "yyyy;mm;dd;",
    },
    properties: {
      type: Object,
      default: function () {
        return {};
      },
    },
    options: {
      type: Object,
      default: function() {
        return {
          empty: "",
        };
      },
    },
  },
  data: () => ({
    year: "",
    month: "",
    startDay: "",
    finishDay: "",
  }),
  watch: {
    value: {
      handler() {
        this.$nextTick(() => {
          if (this.value) {
            this.year = this.value.toString().split(';')[0];
            this.month = this.value.toString().split(';')[1];
            this.startDay = this.value.toString().split(';')[2];
            this.finishDay = this.value.toString().split(';')[3];
          }
        });
      },
      immediate: true,
    },
    year() {
      this.$emit("input", this.year +";"+ this.month +";"+ this.startDay +";"+ this.finishDay +";");
    },
    month() {
      this.$emit("input", this.year +";"+ this.month +";"+ this.startDay +";"+ this.finishDay +";");
    },
    startDay() {
      this.$emit("input", this.year +";"+ this.month +";"+ this.startDay +";"+ this.finishDay +";");
    },
    finishDay() {
      this.$emit("input", this.year +";"+ this.month +";"+ this.startDay +";"+ this.finishDay +";");
    },
  },
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
      if (this.year) {
        if (this.year.length === 4) {
          this.month = this.options.empty;
          this.startDay = this.options.empty;
          this.finishDay = this.options.empty;
          this.$refs.refMonth.focus();
        } else {
          if (this.year.length === 0) {
            this.year = this.options.empty; 
          }
        }
      } else {
        this.month = this.options.empty;
        this.startDay = this.options.empty;
        this.finishDay = this.options.empty; 
      }
    },
    keyUpMonth() {
      if (this.year && this.year.length === 4) {
        if (this.month) {
          if ((Number(this.month) < 0) || (Number(this.month) > 12)) {
            this.month = this.options.empty;
          } else {
            if (this.month.length === 2) {
              this.$refs.refStartDay.focus();    
            }
          }
        } else {
          this.startDay = this.options.empty;
          this.finishDay = this.options.empty;
        }
      } else {
        this.month = this.options.empty;
        this.$refs.refYear.focus();
      }
    },
    keyUpStartDay() {
      if (this.year && this.year.length === 4) {
        if (this.month && this.month.length === 2) {
          if (this.startDay) {
            if (this.startDay.length === 2) {
              let m = moment(this.year +"-"+ this.month +"-"+ this.startDay, 'YYYY-MM-DD');
              if (!m.isValid()) {
                this.startDay = this.options.empty;
              } else {
                this.$refs.refFinishDay.focus();
              }
            }
          } else {
            this.finishDay = this.options.empty;
          }
        } else {
          this.startDay = this.options.empty;
          this.$refs.refMonth.focus();
        }
      } else {
        this.startDay = this.options.empty;
        this.$refs.refYear.focus();
      }
    },
    keyUpFinishDay() {
      if (this.year && this.year.length === 4) {
        if (this.month && this.month.length === 2) {
          if (this.startDay && this.startDay.length === 2) {
            if (this.finishDay) {
              let m = moment(this.year +"-"+ this.month +"-"+ this.finishDay, 'YYYY-MM-DD');
              if (!m.isValid()) {
                this.finishDay = this.options.empty;
              } else {
                if (this.finishDay.length === 2) {
                  if (this.startDay > this.finishDay) {
                    this.startDay = this.options.empty;      
                    this.finishDay = this.options.empty;      
                    this.$refs.refStartDay.focus();
                  }
                }
              }
            }
          } else {
            this.finishDay = this.options.empty;
            this.$refs.refStartDay.focus();
          }
        } else {
          this.finishDay = this.options.empty;
          this.$refs.refMonth.focus();
        }
      } else {
        this.finishDay = this.options.empty;
        this.$refs.refYear.focus();
      }
    },

    // keyUpFinishDay() {
    //   if (this.startDay) {
    //     if (this.finishDay.length === 2) {
    //       let m = moment(this.year +"-"+ this.month +"-"+ this.finishDay, 'YYYY-MM-DD');
    //       if (!m.isValid()) {
    //         this.finishDay = this.options.empty;
    //       } else {
    //         if (this.startDay > this.finishDay) {
    //           this.startDay = this.options.empty;      
    //           this.finishDay = this.options.empty;      
    //           this.$refs.refStartDay.focus();
    //         }
    //       }
    //     }
    //   } else {
    //     this.finishDay = this.options.empty;
    //     this.$refs.refStartDay.focus();
    //   }
    // },

    focus() {
      if (!this.year) {
        this.$refs.refYear.focus();
      } else {
        if (!this.month) {
          this.$refs.refMonth.focus();
        } else {
          if (!this.startDay) {
            this.$refs.refStartDay.focus();
          } else {
            this.$refs.refFinishDay.focus();
          }
        } 
      }
    }
  },
};
</script>
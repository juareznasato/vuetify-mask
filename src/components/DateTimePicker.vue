<template>
  <div>
    <v-menu
      v-model="menu"
      v-bind:close-on-content-click="false"
      v-bind:nudge-right="40"
      transition="scale-transition"
      data-app="true"
      offset-y
      max-width="100%"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="compShow"
          v-bind:label="label"
          v-bind="properties"
          v-on:click:append="(menu = true), (activeTab = 1)"
          v-on:click:clear="menu = false"
          v-on="on"
        ></v-text-field>
      </template>
      <v-tabs
        dark
        class="elevation-2"
        v-bind:background-color="options.tabBackgroundColor"
        v-model="activeTab"
      >
        <v-tab v-bind:key="0">
          <v-icon left>mdi-calendar-outline</v-icon>
          {{ options.tabDateTitle }}
        </v-tab>
        <v-tab v-bind:key="1">
          <v-icon left>mdi-calendar-clock</v-icon>
          {{ options.tabTimeTitle }}
        </v-tab>
        <v-tab-item v-bind:key="0">
          <v-card flat style="overflow: auto">
            <v-date-picker
              no-title
              v-model="modDate"
              v-on:change="closingControl(), emit()"
              v-bind:locale="options.locale"
            ></v-date-picker>
          </v-card>
        </v-tab-item>
        <v-tab-item v-bind:key="1">
          <v-card flat>
            <v-time-picker
              landscape
              ref="refTimePicker"
              format="24hr"
              v-model="modTime"
              v-bind:color="options.tabBackgroundColor"
              v-bind:use-seconds="options.useSeconds"
              v-on:change="(menu = false), emit()"
              v-bind:disabled="formattedDate === null || formattedDate === ''"
            ></v-time-picker>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-menu>
  </div>
</template>

<script>
import moment from "moment";
export default {
  model: { prop: "value", event: "input" },
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    label: {
      type: String,
      default: "Label",
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
        return {};
      },
    },
  },
  data: () => ({
    modDate: "",
    modTime: "00:00",
    formattedDate: "",
    menu: false,
    readonly: true,
    activeTab: 0,
  }),
  computed: {
    compShow: {
      get: function() {
        const THIS = this;
        let mdf = this.value
          ? (THIS.formattedDate = moment(new Date(this.value)).format(
              this.options.format
            ))
          : "";
        let mt = this.value
          ? (THIS.modTime = moment(new Date(this.value)).format(
              this.options.useSeconds ? "HH:mm:ss" : "HH:mm"
            ))
          : "";
        return mdf + " " + mt;
      },
      set: function() {
        const THIS = this;
        THIS.modDate = null;
        THIS.modTime = this.options.useSeconds ? "00:00:00" : "00:00";
        THIS.formattedDate = null;
        this.$emit("input", null);
      },
    },
  },
  watch: {
    // When computed.compShow.formattedDate is changed:
    formattedDate() {
      return this.value
        ? (this.modDate = moment(new Date(this.value)).format("YYYY-MM-DD"))
        : null;
    },
    // Open always on date tab and selected hour
    menu() {
      if (!this.menu) {
        this.activeTab = 0;
        if (this.$refs.refTimePicker) {
          this.$refs.refTimePicker.selectingHour = true;
        }
      }
    },
  },
  methods: {
    emit() {
      this.$emit("input", this.stringToMillisecond(this.modDate, this.modTime));
    },
    stringToMillisecond: function(date, time) {
      return Date.parse(date + " " + time);
    },
    closingControl() {
      if (this.options.closeOnDateClick === true) {
        this.menu = false;
      } else {
        this.activeTab = 1;
      }
    },
  },
};
// Str to milli
// var d = Date.parse(date);
// milli to date
// this.date = new Date(d);
</script>

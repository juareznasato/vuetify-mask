<template>
  <v-container>
    <v-row>
      <v-col cols="4" sm="4" md="4">
        <v-text-field-datetimepicker
          v-model="value1"
          v-bind:label="label1"
          v-bind:options="options1"
        />
        v-model: {{ value1 }} (milliseconds)
      </v-col>
      <v-col cols="4" sm="4" md="4">
        <v-text-field-datetimepicker
          v-model="value2"
          v-bind:label="label2"
          v-bind:options="options2"
        />
        v-model: {{ value2 }} (milliseconds)
      </v-col>
      <v-col cols="4" sm="4" md="4">
        <v-text-field-datetimepicker
          v-model="value3"
          v-bind:label="label3"
          v-bind:options="options3"
        />
        v-model: {{ value3 }} (milliseconds)
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DateTimePicker from "@/components/DateTimePicker.vue";

export default {
  name: "app",
  components: {
    "v-text-field-datetimepicker": DateTimePicker,
  },
  data: () => ({
    value1: 1558220700000,
    label1: "Data Hora",
    options1: {
      tabDateTitle: "Data",
      tabTimeTitle: "Hora",
      locale: "pt-BR",
      format: "DD/MM/YYYY",
      icon: "mdi-calendar",
      iconTime: "",
      backgroundColor: "green",
      closeOnDateClick: false,
      useSeconds: false,
      clearable: false,
      outlined: true,
    },
    value2: 1558220700000,
    label2: "Date Time Picker",
    options2: {
      tabDateTitle: "Date",
      tabTimeTitle: "Time",
      locale: "en-US",
      format: "YYYY-MM-DD",
      icon: "",
      iconTime: "mdi-av-timer",
      backgroundColor: "blue",
      closeOnDateClick: true,
      useSeconds: true,
      clearable: false,
      outlined: true,
    },
    value3: 1558220710000,
    label3: "Date Time Picker",
    options3: {
      tabDateTitle: "Date",
      tabTimeTitle: "Time",
      locale: "en-US",
      format: "YYYY-MM-DD",
      icon: "mdi-calendar",
      iconTime: "",
      backgroundColor: "red",
      closeOnDateClick: false,
      useSeconds: true,
      clearable: true,
      outlined: false,
    },
  }),
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="4" sm="4" md="4">
        <v-text-field-datetimepicker
          v-model="value1"
          label="Data Hora"
          v-bind:options="{
            tabDateTitle: 'Data',
            tabTimeTitle: 'Hora',
            locale: 'pt-BR',
            format: 'DD/MM/YYYY',
            icon: 'mdi-calendar',
            iconTime: '',
            backgroundColor: 'green',
            closeOnDateClick: false,
            useSeconds: false,
            clearable: false,
            outlined: true,
          }"
        />
        v-model: {{ value1 }} (milliseconds)
      </v-col>
      <v-col cols="4" sm="4" md="4">
        <v-text-field-datetimepicker
          v-model="value2"
          label="Date Time Picker"
          v-bind:options="{
            tabDateTitle: 'Date',
            tabTimeTitle: 'Time',
            locale: 'en-US',
            format: 'YYYY-MM-DD',
            icon: '',
            iconTime: 'mdi-av-timer',
            backgroundColor: 'blue',
            closeOnDateClick: true,
            useSeconds: true,
            clearable: false,
            outlined: true,
          }"
        />
        v-model: {{ value2 }} (milliseconds)
      </v-col>
      <v-col cols="4" sm="4" md="4">
        <v-text-field-datetimepicker
          v-model="value3"
          label="Date Time Picker"
          v-bind:options="{
            tabDateTitle: 'Date',
            tabTimeTitle: 'Time',
            locale: 'en-US',
            format: 'YYYY-MM-DD',
            icon: 'mdi-calendar',
            iconTime: '',
            backgroundColor: 'red',
            closeOnDateClick: false,
            useSeconds: true,
            clearable: true,
            outlined: false,
          }"
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

    value2: 1558220700000,

    value3: 1558220710000,
  }),
};
</script>

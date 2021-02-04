<template>
  <v-container>
    <v-row>
      <v-col cols="4" sm="4" md="4">
        <v-text-field-datetimepicker
          v-model="value1"
          label="Data Hora"
          v-bind:properties="{
            backgroundColor: '#EEE9E9',
            clearable: false,
            outlined: true,
            prependIcon: 'mdi-calendar',
            appendIcon: 'mdi-av-timer'
          }"
          v-bind:options="{
            tabDateTitle: 'Data',
            tabTimeTitle: 'Hora',
            tabBackgroundColor: 'green',
            locale: 'pt-BR',
            format: 'DD/MM/YYYY',
            closeOnDateClick: false,
            useSeconds: false,
          }"
        />
        v-model: {{ value1 }} (milliseconds)
      </v-col>
      <v-col cols="4" sm="4" md="4">
        <v-text-field-datetimepicker
          v-model="value2"
          label="Date Time Picker"
          v-bind:properties="{
            backgroundColor: '#EEE9E9',
            clearable: false,
            outlined: false,
            prependIcon: 'mdi-calendar',
            appendIcon: ''
          }"
          v-bind:options="{
            tabDateTitle: 'Date',
            tabTimeTitle: 'Time',
            tabBackgroundColor: 'blue',
            locale: 'en-US',
            format: 'YYYY-MM-DD',
            closeOnDateClick: false,
            useSeconds: false,
          }"
        />
        v-model: {{ value2 }} (milliseconds)
      </v-col>
      <v-col cols="4" sm="4" md="4">
        <v-text-field-datetimepicker
          v-model="value3"
          label="Date Time Picker"
          v-bind:properties="{
            backgroundColor: '',
            clearable: false,
            outlined: false,
            prependIcon: '',
            appendIcon: ''
          }"
          v-bind:options="{
            tabDateTitle: 'Date',
            tabTimeTitle: 'Time',
            tabBackgroundColor: 'red',
            locale: 'en-US',
            format: 'YYYY-MM-DD',
            closeOnDateClick: false,
            useSeconds: true,
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

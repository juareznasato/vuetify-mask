<template>
  <v-app id="inspire">
    <v-card-title>
      <v-toolbar dark class="elevation-2" color="cyan">
        <v-toolbar-title>vuetify-mask</v-toolbar-title>
      </v-toolbar>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-money />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-negative-money />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-percent />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-integer />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-creditcard />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-phonenumber />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-simplemask />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-dotnumber />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-filebase64 />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-datetime />
          </v-col>
          <v-col cols="12" sm="4" md="12">
            <v-text-field-datetimepicker />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-cpf />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-cnpj />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-cep />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-yearmonthdayday />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-app>
</template>

<script>
import testMoney from "./TestMoney.vue";
import testNegativeMoney from "./TestNegativeMoney.vue";
import testPercent from "./TestPercent.vue";
import testInteger from "./TestInteger.vue";
import testDateTime from "./TestDateTime.vue";
import testDateTimePicker from "./TestDateTimePicker.vue";
import testCreditCard from "./TestCreditCard.vue";
import testPhoneNumber from "./TestPhoneNumber.vue";
import testSimpleMask from "./TestSimpleMask.vue";
import testCpf from "./TestCpf.vue";
import testCnpj from "./TestCnpj.vue";
import testCep from "./TestCep.vue";
import testFileBase64 from "./TestFileBase64.vue";
import testDotNumber from "./TestDotNumber.vue";
import testYearMonthDayDay from "./TestYearMonthDayDay.vue";

export default {
  name: "app",
  components: {
    "v-text-field-money": testMoney,
    "v-text-field-negative-money": testNegativeMoney,
    "v-text-field-percent": testPercent,
    "v-text-field-integer": testInteger,
    "v-text-field-datetime": testDateTime,
    "v-text-field-creditcard": testCreditCard,
    "v-text-field-phonenumber": testPhoneNumber,
    "v-text-field-simplemask": testSimpleMask,
    "v-text-field-cpf": testCpf,
    "v-text-field-cnpj": testCnpj,
    "v-text-field-cep": testCep,
    "v-text-field-filebase64": testFileBase64,
    "v-text-field-dotnumber": testDotNumber,
    "v-text-field-datetimepicker": testDateTimePicker,
    "v-text-field-yearmonthdayday": testYearMonthDayDay,
  },
};
</script>

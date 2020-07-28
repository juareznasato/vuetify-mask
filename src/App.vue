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
            <v-text-field-percent />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-integer />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-datetime />
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-creditcard />            
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-phonenumber />            
          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-text-field-common />
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
        </v-row>
      </v-container>
    </v-card-text>
  </v-app>
</template>

<script>
import TestMoney from "./TestMoney.vue";
import TestPercent from "./TestPercent.vue";
import TestInteger from "./TestInteger.vue";
import TestDateTime from "./TestDateTime.vue";
import TestCreditCard from "./TestCreditCard.vue";
import TestPhoneNumber from "./TestPhoneNumber.vue";
import TestCommon from "./TestCommon.vue";
import TestCpf from "./TestCpf.vue";
import TestCnpj from "./TestCnpj.vue";
import TestCep from "./TestCep.vue";

export default {
  name: "app",
  components: {
    "v-text-field-money": TestMoney,
    "v-text-field-percent": TestPercent,
    "v-text-field-integer": TestInteger,
    "v-text-field-datetime": TestDateTime,
    "v-text-field-creditcard": TestCreditCard,
    "v-text-field-phonenumber": TestPhoneNumber,
    "v-text-field-common": TestCommon,
    "v-text-field-cpf": TestCpf,
    "v-text-field-cnpj": TestCnpj,
    "v-text-field-cep": TestCep,
  },
};
</script>

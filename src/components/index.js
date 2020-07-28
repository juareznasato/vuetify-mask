import Money from "./Money.vue";
import Percent from "./Money.vue";
import Integer from "./Integer.vue";
import DateTime from "./DateTime.vue";
import SimpleMask from "./SimpleMask.vue";
import Cpf from "./Cpf.vue";
import Cnpj from "./Cnpj.vue";
import Cep from "./Cep.vue";

function install(Vue) {
  Vue.component("v-text-field-money", Money);
  Vue.component("v-text-field-percent", Percent);
  Vue.component("v-text-field-integer", Integer);
  Vue.component("v-text-field-datetime", DateTime);
  Vue.component("v-text-field-creditcard", SimpleMask);
  Vue.component("v-text-field-phonenumber", SimpleMask);
  Vue.component("v-text-field-common", SimpleMask);
  Vue.component("v-text-field-cpf", Cpf);
  Vue.component("v-text-field-cnpj", Cnpj);
  Vue.component("v-text-field-cep", Cep);
}

export default install;

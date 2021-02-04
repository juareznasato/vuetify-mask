import Money from "./Money.vue";
import Percent from "./Money.vue";
import Integer from "./Integer.vue";
import DateTime from "./DateTime.vue";
import DateTimePicker from "./DateTimePicker.vue";
import SimpleMask from "./SimpleMask.vue";
import Cpf from "./Cpf.vue";
import Cnpj from "./Cnpj.vue";
import Cep from "./Cep.vue";
import FileBase64 from "./FileBase64.vue";
import DotNumber from "./DotNumber.vue";

function install(Vue) {
  Vue.component("v-text-field-money", Money);
  Vue.component("v-text-field-percent", Percent);
  Vue.component("v-text-field-integer", Integer);
  Vue.component("v-text-field-datetime", DateTime);
  Vue.component("v-text-field-datetimepicker", DateTimePicker);
  Vue.component("v-text-field-simplemask", SimpleMask);
  Vue.component("v-text-field-cpf", Cpf);
  Vue.component("v-text-field-cnpj", Cnpj);
  Vue.component("v-text-field-cep", Cep);
  Vue.component("v-text-field-filebase64", FileBase64);
  Vue.component("v-text-field-dotnumber", DotNumber);
}

export default install;

# vuetify-mask

## Project

vuetify-number is a component for working with some of the main types of masks in the v-text-field.
The values are formatted in two masks. The first is displayed in the v-text-field and the second in the v-model.

## Links

[See Demo here](https://).  
[GitHub](https://github.com/juareznasato/vuetify-mask).  
[npm](https://www.npmjs.com/package/vuetify-mask).

## Dependencies
- vuejs  
- vuetify ($ npm install vuetify --save)  
- moment ($ npm install moment --save)
- material design icon (npm install @mdi/font -D --save)

## Install

__$ npm install vuetify-mask --save__

## Register
1- Create a file src/plugins/vuetify-mask.js with:  
import Vue from "vue";  
import VuetifyMask from "vuetify-mask";  
Vue.use(VuetifyMask);  
export default VuetifyMask;

2- Add in src/mains.js file:  
import "./plugins/vuetify-mask.js";


## Properties (v-bind:properties)
In theory, you can use any v-text-field property
[v-text-field properties](https://vuetifyjs.com/en/components/text-fields/#text-fields). 

## Options (v-bind:options)
| Option | Component | Default | Description |
| ------------ | ------------ | ------------ | ------------ |
| humanMask | Money, Percent, Integer, DateTime, Common  | | mask that will be applied in the v-text-field |
| machineMask | Money, Percent, Integer, Common, CPF, CNPJ, CEP | | mask that will be applied in the v-model |
| empty | Money, Percent, Integer, DateTime, Common, CPF, CNPJ, CEP | "" | Value in v-model when v-text-field is empty. Can be null, "" or other|
| applyAfter | Integer, Common, CPF, CNPJ, CEP| | The value is masked only after all typing |
| alphanumeric | Common | false | |
| lowerCase| Common | false | |

## Events
| Event | value | Description |
| ------------ | ------------ | ------------ | ------------ |
| blur | Event | Emitted when the input is blurred |
| change | any | Emitted when the input is changed by user interaction |
| click | MouseEvent | Emitted when input is clicked |
| focus | Event | Emitted when component is focused |
| keydown | KeyboardEvent | Emitted when any key is pressed |
| mousedown | MouseEvent | Emitted when click is pressed |
| mouseup | MouseEvent | Event mouseup |

## How to use

### - Money (v-text-field-money)
```
<template>
  <div>
    <v-text-field-money
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        prefix: 'R$',
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: ' ',
      }"
      v-bind:options="{
        humanMask: '###.###.##0,00',
        machineMask: '########0.00',
        empty: null,
      }"
      v-bind:focus="focus"
      v-on:focus="focus = false"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "123456789.00",    // 123456789.00 or "123456789.00" or "" or null
    label: "Money",
    focus: false,
  }),
};
</script>
```
### - Percent  (v-text-field-percent)
```
<template>
  <div>
    <v-text-field-percent
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        suffix: '%',
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        humanMask: '#00,00',
        machineMask: '#00.00',
        empty: null,
      }"
      v-bind:focus="focus"
      v-on:focus="focus = false"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "12.34",        // 12.34 or "12.34" or "" or null
    label: "Percent",
    focus: false,
  }),
};
</script>

```
### - Integer  (v-text-field-integer)
```
<template>
  <div>
    <v-text-field-integer
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        humanMask: '#########',
        machineMask: '#########',
        empty: null,
        applyAfter: false,
      }"
      v-bind:focus="focus"
      v-on:focus="focus = false"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "123456789", // 123456789 or "123456789" or "" or null
    label: "Integer",
    focus: false,
  }),
};
</script>
```
### - DateTime  (v-text-field-datetime)
```
<template>
  <div>
    <v-text-field-datetime
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: 'YYYY-MM-DD HH:mm:ss',
        'prepend-icon': 'mdi-calendar',
      }"
      v-bind:options="{
        humanMask: 'YYYY-MM-DD HH:mm:ss',
        empty: null,
      }"
      v-bind:focus="focus"
      v-on:focus="focus = false"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "1595386800000",    // Timestamp
    label: "DateTime",
    focus: false,
  }),
};
</script>
```
### - Common  (v-text-field-common)
```
<template>
  <div>
    <v-text-field-common
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        prefix: '',
        suffix: '',
        readonly: false,
        disabled: false,
        outlined: false,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        humanMask: '##-####-####-###',
        machineMask: '##-####-####-###',
        empty: null,
        applyAfter: false,
        alphanumeric: true,
        lowerCase: false,
      }"
      v-bind:focus="focus"
      v-on:focus="focus = false"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "23-A568-B953-356", // "23-A568-B953-356" or "" or null
    label: "Common",
    focus: false,
  }),
};
</script>
```
### - CPF  (v-text-field-cpf) brazilian mask
```
<template>
  <div>
    <v-text-field-cpf
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        readonly: false,
        disabled: false,
        outlined: true,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        machineMask: '###########',
        empty: null,
        applyAfter: true,
      }"
      v-bind:focus="focus"
      v-on:focus="focus = false"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "97702036028", // 97702036028 or "97702036028" or "" or null
    label: "CPF (Brazilian mask)",
    focus: false,
  }),
};
</script>
```
### - CNPJ  (v-text-field-cnpj) brazilian mask
```
<template>
  <div>
    <v-text-field-cnpj
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        disabled: false,
        outlined: true,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        machineMask: '##############',
        empty: null,
        applyAfter: true,
      }"
      v-bind:focus="focus"
      v-on:focus="focus = false"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "50703512000192", // 50703512000192 or "50703512000192" or "" or null
    label: "CNPJ (Brazilian mask)",
    focus: false,
  }),
};
</script>
```
### - CEP  (v-text-field-cep) brazilian mask
```
<template>
  <div>
    <v-text-field-cep
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        disabled: false,
        outlined: true,
        clearable: true,
        placeholder: '',
      }"
      v-bind:options="{
        machineMask: '########',
        empty: null,
        applyAfter: true,
      }"
      v-bind:focus="focus"
      v-on:focus="focus = false"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    value: "82515260", // 82515260 or "82515260" or "" or null
    label: "CEP (Brazilian mask)",
    focus: false,
  }),
};
</script>

```

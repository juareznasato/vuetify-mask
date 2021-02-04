<template>
  <div>
    <v-text-field-filebase64
      v-model="value"
      v-bind:label="label"
      v-bind:properties="{
        outlined: true,
        placeholder: ' ',
        appendIcon:'mdi-message-image-outline',
      }"
      v-bind:options="{
        acceptFile:'image/*',
      }"
      v-on:fileName="fileName = $event"
    />
    v-model:
    {{
      value !== null && value !== ""
        ? value
        : value === null
        ? "null"
        : value === ""
        ? "''"
        : ""
    }}<br>
    fileName: {{ fileName }}
  </div>
</template>

<script>
// acceptFile:'image/*'
// acceptFile:'application/pdf'
// acceptFile:'image/jpeg,image/gif,image/png,application/pdf'
// acceptFile:'image/jpeg,image/gif,image/png,application/pdf,image/x-eps'

import fileBase64 from "@/components/FileBase64.vue";

export default {
  components: {
    "v-text-field-filebase64": fileBase64,
  },
  data: () => ({
    // value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK3RFWHRDcmVhdGlvbiBUaW1lAE1vIDEzIE9rdCAyMDAzIDAwOjAyOjIzICswMTAwJxxXNgAAAAd0SU1FB9MKDBYCM81Vv24AAAAJcEhZcwAACvAAAArwAUKsNJgAAAAEZ0FNQQAAsY8L/GEFAAABkElEQVR42tWSPUvDUBSG33sbkyZpo1UXP8YidRFB/AJBJ0EHN8XJ/6DoD3AXEf+Amyi4iouLH6CiDjpYRC3SVodSjbWJNrm9uaZFIYJFHD1wuOdc3vc5HDjAvw/y0+fURWKo/FKee+dsoKJQqHyixejyetf1wa+AyWRi1nxkS/HoIO1rGq4KTp/2cWMde42tdGEzcb1cEzB2Eh8qvfK97uZRGo92oL4uCg6BAjNxV0zhMr/rhQ06vNN/e/jloUGAZTqzkhyjkgwURR6ml0PBT0uYkCQPRDaobTrzQY8UbFzOBxSZ4d69wguJQfNkfz7BO7eRZ88IKR5si/fWBJQYpy2qVp1Wlop4C9Hqjpx4UBUJlKrI+Zqg5/sKrnMaEgKRcBiGnzE9ggZNh6FpMFQVhBAU3dJ5TQCT2WoymxH1uo7op6lSV2CG/ybTacHV8krQEwo2hQ2Wcqcdkck+j3S2tZH2xiYYShjmm42toyPxgPxibqK09ushYQ3jsLGgR5Seisa2nDMYWMIMtv9ypf8kPgCKH5dJNdYi+wAAAABJRU5ErkJggg==",
    value:"",
    fileName: "",
    label: "Select Image",
  }),
};
</script>

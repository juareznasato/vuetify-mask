<template>
  <div>
        <img v-bind:src="imageBase64" height="150" v-if="imageBase64 && showImage">
        <v-text-field
          v-model="cmpValue"
          v-bind:label="label"
          v-bind="properties"
          v-on:click="pickFile"
          readonly
        ></v-text-field>
        <input
          ref="refImage"
          type="file"
          style="display: none"
          accept="image/*"
          v-on:change="onFilePicked"
        >
  </div>
</template>

<script>
export default {
  model: { prop: "value", event: "input" },
  props: {
    value: {
      type: [String],
      default: "0",
    },
    label: {
      type: String,
      default: "",
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
        return {
          outputMask: "########",
          empty: "",
          applyAfter: false,
        };
      },
    },
  },

  data: () => ({
    imageName: "",
    imageFile: "",
    imageBase64: "",
    showImage: true
  }),

  computed: {
    cmpValue: {
      get: function() {
        this.getImage(this.value);
        return this.imageName;
      }
    },
  },

  methods: {
    getImage(value) {
      this.imageBase64 = value;
    },
    pickFile() {
      this.$refs.refImage.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);
        fileReader.addEventListener("load", () => {
          this.imageBase64 = fileReader.result;
          this.imageFile = files[0];
          this.$emit("input", this.imageBase64);
        });
      } else {
        this.clear();
      }
    },
    clear() {
      this.imageName = "";
      this.imageFile = "";
      this.imageBase64 = "";
    }
    // /* Obter o nome da imagem selecionada */
    // getImageName: function() {
    //   return this.imageName;
    // },
    // /* Obter a String base64 da imagem selecionada */
    // getImageBase64: function() {
    //   return this.imageBase64;
    // },
    // /* Obter o tipo do arquivo */
    // getType: function() {
    //   return this.imageFile.type;
    // },
    // /* Verifica se o arquivo é do tipo imagem. Ex: image/jpeg, image/png... */
    // isImage: function() {
    //   return this.getType().includes("image");
    // },
    // /* Exibir/Ocultar no componente a imagem selecionada */
    // setShowImage(showImage) {
    //   this.showImage = showImage;
    // },
  }
};
</script>


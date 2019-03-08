<template>
  <v-card>
    <v-img :src="image" aspect-ratio="2.75"></v-img>
    <v-card-title primary-title>{{ title }}</v-card-title>
    <v-card-text>{{ snippet }}</v-card-text>
  </v-card>
</template>

<script>
import { VCard, VCardText, VCardTitle, VImg } from "vuetify/lib";
export default {
  components: {
    VCard,
    VCardTitle,
    VCardText,
    VImg
  },
  props: ["title", "snippet", "image"]
};
</script>

<style></style>

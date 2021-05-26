<template>
  <div class="w3-third w3-container w3-margin-bottom">
    <img
      :src="imgsrc"
      alt="Norway"
      style="width: 100%"
      class="w3-hover-opacity"
    />
    <div class="w3-container w3-white">
      <p><b>Lorem Ipsum</b></p>
      <p>
        Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
        porta lectus vitae, ultricies congue gravida diam non fringilla.
      </p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import api from "../api";
import tottering_lads from "./../assets/test.jpg";

export default {
  name: "BlogPost",
  data() {
    return {
      imgsrc: tottering_lads,
      id: 1,
    };
  },
  methods: {
    getPost: function () {
      api.getPost();
    },
  },
};
</script>
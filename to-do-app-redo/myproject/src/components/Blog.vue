<template>
  <div class="w3-light-grey w3-content" style="max-width: 1600px">
    <!-- Sidebar/menu -->

    <!-- Overlay effect when opening sidebar on small screens -->
    <div
      class="w3-overlay w3-hide-large w3-animate-opacity"
      onclick="w3_close()"
      style="cursor: pointer"
      title="close side menu"
      id="myOverlay"
    ></div>

    <!-- !PAGE CONTENT! -->
    <div class="w3-main">
      <!-- Header -->
      <header id="portfolio">
        <span
          class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
          onclick="w3_open()"
          ><i class="fa fa-bars"></i
        ></span>
        <div class="w3-container">
          <h1><b>Blog</b></h1>
          <div class="w3-section w3-bottombar w3-padding-16">
            <span class="w3-margin-right">Filter:</span>
            <button class="w3-button w3-black">ALL</button>
            <button class="w3-button w3-white">
              <i class="fa fa-diamond w3-margin-right"></i>Design
            </button>
            <button class="w3-button w3-white w3-hide-small">
              <i class="fa fa-photo w3-margin-right"></i>Photos
            </button>
            <button class="w3-button w3-white w3-hide-small">
              <i class="fa fa-map-pin w3-margin-right"></i>Art
            </button>
          </div>
        </div>
      </header>

      <!-- First Photo Grid-->
      <div class="w3-row-padding">
        <blog-post v-on:mouseover="selectPost()"></blog-post>
        <blog-post v-on:mouseover="selectPost()"></blog-post>
        <blog-post v-on:mouseover="selectPost()"></blog-post>
      </div>
      <!-- Second Photo Grid-->
      <div class="w3-row-padding">
        <blog-post v-on:mouseover="selectPost()"></blog-post>
        <blog-post v-on:mouseover="selectPost()"></blog-post>
        <blog-post v-on:mouseover="selectPost()"></blog-post>
      </div>
    </div>
  </div>
</template>

<style>
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}
</style>


<script>
import tottering_lads from "./../assets/test.jpg";
import BlogPost from "./BlogPost.vue";

export default {
  components: { BlogPost },
  name: "Blog",
  data() {
    return {
      imgsrc: tottering_lads,
      blogPosts: [BlogPost, BlogPost, BlogPost],
    };
  },
  methods: {
    selectPost: function (index) {
      console.log(this.blogPosts);
      console.log(this.blogPosts[index]);
      return this.blogPosts[index];
    },
  },
};
</script>


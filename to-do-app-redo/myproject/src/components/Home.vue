<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div>
      <div class="btn-box">
        <a class="btn-block" v-on:mouseup="changeDemosVisibility()">
          <span class="btn-text">{{ demoVisibilityMessage }}</span></a
        >
      </div>
    </div>
    <vue-det v-if="showDemos"></vue-det>
    <div v-else class="spacer"></div>
  </div>
</template>

<script>
import VueDet from "./VueDet.vue";
export default {
  components: { VueDet },
  name: "Home",
  data() {
    return {
      msg: "I'm trying to learn Vue here!",
      showDemos: false,
      demoVisibilityMessage: "Click to reveal demos!",
    };
  },
  methods: {
    changeDemosVisibility: function () {
      this.showDemos = !this.showDemos;
      this.demoVisibilityMessage = this.showDemos
        ? "Click to hide demos!"
        : "Click to reveal demos!";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 20px;
  padding: 150px;
}
.btn-box {
  padding: 30px;
}
.btn-block {
  padding: 20px;
  background-color: #daebfa;
  border-radius: 20px;
  border: 2px solid #363636;
  text-decoration: none;
  width: 400px;
  margin: 0 auto;
  text-align: center;
}
.btn-text {
  color: #363636;
  font-size: 20px;
}
.spacer {
  padding-block: 400px;
}
</style>

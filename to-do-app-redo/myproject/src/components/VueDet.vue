<template>
  <div id="VueDet">
    <h1>Firstname : {{ firstname }}</h1>
    <h1>Lastname : {{ lastname }}</h1>
    <div v-html="htmlcontent"></div>
    <img
      :src="imgsrc"
      width="300"
      height="250"
      v-on:mouseover="changename()"
      v-on:mouseout="originalname()"
    />
  </div>
</template>

<script>
import tottering_lads from "./../assets/test.jpg";

export default {
  name: "VueDet",
  data() {
    return {
      firstname: "Brady",
      lastname: "Volkmann",
      htmlcontent: "<div><h1>Vue Js Template</h1></div>",
      imgsrc: tottering_lads,
    };
  },
  methods: {
    mydetails: function () {
      return "I am " + this.firstname + " " + this.lastname;
    },
    changename: function () {
      this.firstname = "Jon";
      this.lastname = "Meinhardt";
    },
    originalname: function () {
      this.firstname = "Brady";
      this.lastname = "Volkmann";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

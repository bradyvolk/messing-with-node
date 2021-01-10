<template>
  <div id="VueDet">
    <h1>Firstname : {{ firstname }}</h1>
    <h1>Lastname : {{ lastname }}</h1>
    <h1>{{ mydetails() }}</h1>
  </div>
</template>

<script>
export default {
  name: "VueDet",
  data() {
    return {
      firstname: "Brady",
      lastname: "Volkmann",
      address: "New York",
    };
  },
  methods: {
    mydetails: function () {
      return "I am " + this.firstname + " " + this.lastname;
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

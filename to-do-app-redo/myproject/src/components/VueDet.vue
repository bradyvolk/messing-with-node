<template>
  <div id="VueDet" class="demo">
    <h1>Learning Vue with Brady!</h1>
    <p>
      This is from a tutorial I'm following here:
      <a href="https://www.tutorialspoint.com/vuejs/index.htm"
        >https://www.tutorialspoint.com/vuejs/index.htm</a
      >
    </p>
    <br /><br />
    <h1>Mouse-over with v-on</h1>
    <h2>Firstname : {{ firstname }}</h2>
    <h2>Lastname : {{ lastname }}</h2>
    <div v-html="htmlcontent"></div>
    <img
      :src="imgsrc"
      width="300"
      height="250"
      v-on:mouseover="changename()"
      v-on:mouseout="originalname()"
    />
    <div class="demo">
      <h1>V-model in Vue</h1>
      FirstName : <input type="text" v-model="firstname" /> <br /><br />
      LastName : <input type="text" v-model="lastname" /> <br /><br />
      <h2>My name is {{ firstname }} {{ lastname }}</h2>
      <h2>Using computed method : {{ getfullname }}</h2>
    </div>
    <div class="demo">
      <h1>Computed Properties vs Methods</h1>
      <h2 style="background-color: blue">
        Random No from method: {{ getrandomno1() }}
      </h2>
      <h2 style="background-color: blue">
        Random No from method : {{ getrandomno1() }}
      </h2>
      <h2 style="background-color: green">
        Random No from computed property: {{ getrandomno }}
      </h2>
      <h2 style="background-color: green">
        Random No from computed property: {{ getrandomno }}
      </h2>
    </div>
    <div class="demo">
      <h1>Watching properties in Vue</h1>
      Kilometers :
      <input type="text" v-model="kilometers" />
      Meters :
      <input type="text" v-model="meters" />
    </div>
    <div class="demo">
      <h1>V-bind in Vue</h1>
      {{ title_data }}<br />
      <a v-bind:href="hreflink" target="_blank">Click Me </a> <br />
    </div>
    <div class="demo">
      <div
        v-bind:class="[isActive ? infoclass : '', hasError ? errorclass : '']"
      >
        <b>{{ title_class }}</b>
      </div>
      <new_component v-bind:class="{ active: isActive }"></new_component>
      <div v-bind:style="styleobj">
        {{ title_style }}
      </div>
    </div>
  </div>
</template>

<script>
import tottering_lads from "./../assets/test.jpg";

export default {
  name: "VueDet",
  data() {
    return {
      isVisible: false,
      firstname: "Brady",
      lastname: "Volkmann",
      htmlcontent: "<div><h3>droppin in html content with vue</h3></div>",
      imgsrc: tottering_lads,
      kilometers: 0,
      meters: 0,
      title_data: "DATA BINDING",
      hreflink: "http://www.google.com",
      title_class: "CLASS AND STYLE BINDING",
      infoclass: "info",
      errorclass: "displayError",
      isActive: true,
      hasError: true,
      title_style: "Inline style Binding",
      styleobj: {
        color: "red",
        fontSize: "16px",
      },
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
    getrandomno1: function () {
      return Math.random();
    },
  },
  computed: {
    getfullname: function () {
      return this.firstname + " " + this.lastname;
    },
    getrandomno: function () {
      return Math.random();
    },
  },
  watch: {
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function (val) {
      this.kilometers = val / 1000;
      this.meters = val;
    },
  },
  components: {
    new_component: {
      template: "<div>Class Binding for component</div>",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 10px;
}
h2 {
  font-weight: normal;
}
.active {
  color: #4f8a10;
  background-color: #dff2bf;
}
.displayError {
  color: #d8000c;
  background-color: #ffbaba;
}
.info {
  color: #00529b;
  background-color: #bde5f8;
}
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
</style>

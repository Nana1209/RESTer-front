<template>
  <div id="app">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header ">
          <router-link to="/"><p class="navbar-brand"> RESTer</p></router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/"><p class="navbar-text navbar-right" @click="srollTo('standard')"><i class="fa fa-list-ul"></i> Standard</p> </router-link></li>
          <li><router-link to="/"><p class="navbar-text navbar-right" @click="srollTo('status')"> <i class="fa fa-chart-line"></i> Status</p></router-link></li>
          <li><router-link to="/oas-input"><p class="navbar-text navbar-right"><i class="fas fa-edit"></i> Evaluate</p></router-link></li>
        </ul>
      </div>
    </nav><router-view/>


  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    srollTo:function (id){
      document.getElementById(id).scrollIntoView();
      //document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

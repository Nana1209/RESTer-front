<template>
  <div class="hello">
    <div class="jumbotron">
      <div class="container text-center">
        <h1>RESTER</h1>
        <h2>REST API EvaluatoR:</h2><h2>A Comprehensive REST API Design Evaluator based on OpenAPI Specification Analysis
        </h2>
        <!-- <p><a class="btn btn-primary btn-lg"  role="button">Evaluate NOW!</a></p>-->
        <p><router-link class="btn btn-primary" type="button" to="/oas-input" >Evaluate NOW!</router-link></p>
      </div>
    </div>
    <router-view></router-view>
    <div class="container" >
      <div id="standard">
        <div class="page-header text-center">
          <h2>REST API design standard</h2>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div style="height:800px" id="echarts-tree-chart"></div>
          </div>
        </div>
      </div>
      <div id="status">
        <div class="page-header text-center">
          <h2>REST API development status</h2>
          <h3>REST APIs for our empirical srudy from APIs.guru(https://apis.guru/).</h3>
          <form class="form-inline text-center" id="cateForm">
            <select class="form-control" name="category">
              <option selected="selected" value="allresult">Show all, please select one category.</option>
              <option value="cloud">cloud (cloud, backend, IOT, iPAAS)</option>
              <option value="open_data">open_data (open_data, storage, database, data)</option>
              <option value="tools">tools (developer_tools, project_management, web site management, application development)</option>
              <option value="media">media</option>
              <option value="entertainment">entertainment (entertainment, sports)</option>
              <option value="ecommerce">ecommerce (ecommerce, marketing, payment, business)</option>
              <option value="financial">financial</option>
              <option value="location">location (location, transport, time_management)</option>
              <option value="text">text (text, transcription, documents, reporting)</option>
              <option value="social">social (social, customer_relation, customer relationship management)</option>
              <option value="collaboration">collaboration (collaboration, enterprise, jobs)</option>
              <option value="messaging">messaging (messaging, telecom, email, chat)</option>
              <option value="security">security (security, monitoring, verification, fitness)</option>
              <option value="search">search (search, education, genetics, government, food, medical, charity, reference, healthcare, 3d)</option>
              <option value="hosting">hosting (hosting, domains, accounts</option>
              <option value="analytics">analytics (analytics, machine_learning, extraction)</option>
            </select>
            <input class="btn btn-primary" type="button" onclick="cateResult()" value="START"/>
          </form>
        </div>
        <div class="row" >
          <div class="col-md-6 col-lg-6 col-sm-12">
            <div style="height:500px" id="echarts-bar-chart"></div>
          </div>
          <div class="col-md-6 col-lg-6 col-sm-12">
            <div style="height:500px" id="echarts-pie-chart"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    mytest : function (){
      console.log("mytest");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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

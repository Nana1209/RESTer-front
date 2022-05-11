<template>
<div id="rad">
  <div id="cateQuery">
    <form class="form-inline text-center" id="cateQueryForm">
      <select class="form-control" name="category" v-model="category">
        <option selected="selected" value="all">Show all, please select one category.</option>
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
      <input class="btn btn-primary" type="button" @click="cateQueryResult()" value="START"/>
    </form>
  </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Rad",
  data(){
    return {
      category:"all",
      radList:null,
    }

  },
  methods:{
    cateResult(){
      var that=this
      var url='http://localhost:8900/rads/category/'
      url+=this.category
      axios
        //   .get('http://39.104.105.27:8900/empirical-result', {
        .get(url, {
          headers:{"Access-Control-Allow-Origin": "*"},
          params: {
            category:this.category
          }
        })
        .then(/*response => (this.validateResult = response.data)*/
          function (response){
            that.radList = response.data
            console.log("validateResult"+that.radList)
            that.drawBar();
            that.drawPie();
          })
        .catch(function (error) { // 请求失败处理
          console.log("cateAjaxerror"+error);
        });


    },

  }
}
</script>

<style scoped>

</style>

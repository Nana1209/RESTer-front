<template>
  <div class="wrapper wrapper-content animated fadeInRight eva-in " style="padding-top: 10px; padding-bottom: 0px">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <h2>Please enter your API specification:</h2>
      </div>
    </div>
    <div class="row text-center ">
      <div class="col-md-4 col-md-offset-4">
        <ul id="myTab" class="nav nav-tabs">
          <li><h3>choose a way</h3></li>
          <li class="active">
            <a href="#file" data-toggle="tab">
              FILE
            </a>
          </li>
          <li><a href="#url" data-toggle="tab">URL</a></li>
          <li><a href="#text" data-toggle="tab">TEXT</a></li>
        </ul>
        <div id="myTabContent" class="tab-content">
          <div class="tab-pane fade "  id="url">
            <form class="form-horizontal text-center" id="urlForm">
              <div class="form-group text-center">
                <label class="col-md-2 col-md-offset-2 control-label text-navy">API url</label>
                <div class="col-md-6">
                  <input type="text" class="form-control" name="url"/>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-2 col-md-offset-2 control-label text-navy">Category</label>
                <div class="col-sm-6">
                  <select class="form-control" name="category">
                    <option selected="selected">Please select             </option>
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
                </div>
              </div>

              <router-link to="/report"><input class="btn btn-primary" type="button" @click="urlSubmitForm()" value="EVALUATE"/></router-link>
              <input class="btn btn-default" type="reset" value="RESET"/>

            </form>
          </div>
          <div class="tab-pane fade "  id="text">
            <form class="form-horizontal text-center" id="textForm">
              <div class="form-group">
                <label class="col-sm-2 col-md-offset-2 control-label text-navy">API context</label>
                <div class="col-sm-6">
                  <textarea  class="form-control" rows="3" name="context"></textarea>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 col-md-offset-2 control-label text-navy">Category</label>
                <div class="col-sm-6">
                  <select class="form-control" name="category">
                    <option selected="selected">Please select             </option>
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
                </div>
              </div>

              <router-link to="/report"><input class="btn btn-primary" type="button" @click="textSubmitForm()" value="EVALUATE"/></router-link>
              <input class="btn btn-default" type="reset" value="RESET"/>

            </form>
          </div>
          <div class="tab-pane fade in active"  id="file">
            <form id="fileupload">
              <div class="form-group">
                <div class="row">
                  <label class="col-sm-2 col-md-offset-2 control-label text-navy">API file</label>
                  <div class="col-md-6">
                    <input id="file_upload" type="file" name="testfile">
                  </div>
                </div>

              </div>
              <div class="form-group">
                <label class="col-sm-2 col-md-offset-2 control-label text-navy">Category</label>
                <div class="col-sm-6">
                  <select class="form-control" name="category">
                    <option selected="selected">Please select             </option>
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
                </div>
              </div>
              <router-link to="/report"><input class="btn btn-primary" type="button" @click="submitFileForm()" value="EVALUATE"/></router-link>
              <!--<p> <button id="jquery_post">jquery提交</button></p>-->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import store from '../store/store'
// this.store.setMessageAction('nice');
import axios from 'axios'
export default {
  name: "OASinput",
  // data:this.$store.states
  data(){
    return{
      validateResult:{}
    }
  },
  methods: {
    submitFileForm() {
      var formdata = new FormData(document.getElementById("fileupload"));
      axios
      .post('http://localhost:8080/restapi',
        formdata)
      .then(response => {
        /*this.validateResult = response.data;
        console.log("validateResult"+this.validateResult);*/
        this.$store.commit('setDemoValue',response.data);
          console.log("states"+this.$store.state.validateResult);
      }
      )
      .catch(
        function (error) { // 请求失败处理
          console.log(error);
        }
      );
      console.log("submit over");
    },
    textSubmitForm(){
      axios
      .post('http://localhost:8080/restapi',$('#textForm').serialize())
      .then(response => {
        this.$store.commit('setDemoValue',response.data);
        console.log("states"+this.$store.state.validateResult);
      })
        .catch(
          function (error) { // 请求失败处理
            console.log(error);
          }
        );
      console.log("submit over");
    },
    urlSubmitForm(){
      axios
        .post('http://localhost:8080/restapi',$('#urlForm').serialize())
        .then(response => {
          this.$store.commit('setDemoValue',response.data);
          console.log("states"+this.$store.state.validateResult);
        })
        .catch(
          function (error) { // 请求失败处理
            console.log(error);
          }
        );
      console.log("submit over");
    }
  }
}
</script>

<style scoped>

</style>

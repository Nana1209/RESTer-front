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
    <router-view>

    </router-view>
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
            <select class="form-control" name="category" v-model="category">
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
            <input class="btn btn-primary" type="button" @click="cateResult()" value="START"/>
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
import echarts from 'echarts'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      charts: '',
      piecharts:'',
      barcharts:'',
      data1:[{
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "name":"Use resource nouns to name the URI. If the resource is a business process, you need to nominalise it.",
                    "children":[]
                  },
                  {
                    "name":"Use the HTTP method to perform designated operations on network resources, so the operation method for resources does not appear in the URI, that is, no verbs appear.",
                    "children":[]
                  },
                  {
                    "name":"Use lowercase letters in path (URI).",
                    "children":[]
                  },
                  {
                    "name":"use \"-\" instead of \"_\" to split the path.",
                    "children":[]
                  },
                  {
                    "name":"Try to use plural nouns for naming. If it is a separate resource, you can also use the singular.",
                    "children":[]
                  }
                ],
                "name": "resource naming standard "
              },
              {
                "children": [
                  {
                    "name":"Use slash separator \"/\" to indicate a hierarchical relationship, and the trailing slash should not be included in the URL.",
                    "children":[]
                  },
                  {
                    "name":" The hierarchical relationship should conform to the real situation and semantic relationship.",
                    "children":[]
                  },
                  {
                    "name":"The nesting depth is recommended not to exceed 3 levels.",
                    "children":[]
                  },
                  {
                    "name":"Too fine granularity of resource modeling will lead to too frequent interactions and overflow of business logic.",
                    "children":[]
                  },
                  {
                    "name":"The business process is sensitive and the system security requirements are high. It is recommended to use the coarse-grained resource design based on the business process.",
                    "children":[]
                  }
                ],
                "name": "resource structure design"
              },
              {
                "children": [
                  {
                    "name":"Use query parameters (Page, Limit, etc.) to perform functional attributes (such as filtering response information).",
                    "children":[]
                  },
                  {
                    "name":"Use body parameters to provide a larger amount of attribute values (in update, create operation etc.).",
                    "children":[]
                  },
                  {
                    "name":"It is recommended to support convenient indirect reference without id.",
                    "children":[]
                  },
                  {
                    "name":" It is recommended to explicitly describe the attribute dependency in the API specification file.",
                    "children":[]
                  }
                ],
                "name": "parameters design"
              },
              {
                "children": [
                  {
                    "name":"The resource representation (file extension) should not be included in the resource naming (URI).",
                    "children":[]
                  },
                  {
                    "name":"Use the header Content-type to indicate the format of the HTTP message.",
                    "children":[]
                  },
                  {
                    "name":"If the returned resource has multiple forms, users are supported to specify the returned resource format with header Accept.",
                    "children":[]
                  }
                ],
                "name": "Representational design"
              }
              ,
              {
                "children": [
                  {
                    "name":"The response body corresponding to the client request should contain self-links to indicate the relevant resources and the next feasible operation.",
                    "children":[]
                  }
                ],
                "name": "HATEOAS"
              }
            ],
            "name": "resource design"
          },
          {
            "children": [
              {
                "children": [
                  {
                    "name":"Use standard methods defined by the HTTP protocol to operate on resources.",
                    "children":[]
                  },
                  {
                    "name":"Use JSON format in the request message.",
                    "children":[]
                  }
                ],
                "name": "request"
              },
              {
                "children": [
                  {
                    "name":" Use the response code defined by the HTTP protocol to identify the response status.",
                    "children":[]
                  },
                  {
                    "name":"Use JSON formatted message as response message and error description information.",
                    "children":[]
                  }
                ],
                "name": "response"
              }
            ],
            "name": "HTTP interaction design"
          },
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "name": "It is recommended to use OAuth2 protocol for user identity authentication."
                  }
                ],
                "name": "Security scheme"
              },
              {
                "children": [
                  {
                    "children": [],
                    "name": "Use header Cache-Control, Expires, and Date to support mandatory caching."
                  },
                  {
                    "children": [],
                    "name": "Use header ETag or Last-Modified to support negotiation caching."
                  }
                ],
                "name": "Caching mechanism"
              },
              {
                "children": [
                  {
                    "children": [],
                    "name": " It is recommended to describe the version information in the header file."
                  },
                  {
                    "children": [],
                    "name": "Add semantic information to the version information to identify the main update content of the version."
                  },
                  {
                    "children": [],
                    "name": "Release bug fixes and feature breakthroughs separately."
                  }
                ],
                "name": "Version control"
              }
            ],
            "name": "Performance, non functional design"
          }
        ],
          "name": "Standard"
      }],
      validateResult:null,
      category:"allresult",
    }
  },
  methods:{
    mytest : function (){
      console.log("mytest");
    },
    drawTree(id){
      console.log("in drawTree()")
      this.charts = echarts.init(document.getElementById(id))
      this.charts.showLoading();
      this.charts.hideLoading();
      this.charts.setOption({
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',

            data: this.data1,
            initialTreeDepth: 4,
            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '50%',

            symbolSize: 7,

            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 15
            },

            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
              }
            },
            width:"40%",

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      })
    },
    drawPie(){
      console.log("in drawPie()")
      this.piecharts = echarts.init(document.getElementById("echarts-pie-chart"))
      this.piecharts.showLoading();
      this.piecharts.hideLoading();
      this.piecharts.setOption({
        title: {
          text: 'HTTP Method Usage',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['GET', 'POST', 'DELETE','PUT','HEAD','PATCH','OPTIONS','TRACE']
        },
        series: [
          {
            name: 'Usage ratio',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            label: {
              position: 'inner'
            },
            data: [
              {value: this.validateResult.categoryResult[2], name: 'GET'},
              {value: this.validateResult.categoryResult[3], name: 'POST'},
              {value: this.validateResult.categoryResult[4], name: 'DELETE'},
              {value: this.validateResult.categoryResult[5], name: 'PUT'},
              {value: this.validateResult.categoryResult[6], name: 'HEAD'},
              {value: this.validateResult.categoryResult[7], name: 'PATCH'},
              {value: this.validateResult.categoryResult[8], name: 'OPTIONS'},
              {value: this.validateResult.categoryResult[9], name: 'TRACE'},
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    drawBar(){
      console.log("in drawBar()")
      this.barcharts = echarts.init(document.getElementById("echarts-bar-chart"))
      this.barcharts.showLoading();
      /*while(this.validateResult==null){
        console.log("validateresult==null")

      }*/
      this.barcharts.hideLoading();
      this.barcharts.setOption({
        title: {
          text: 'Standard Realization Rate',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Standard Realization Rate']
        },
        xAxis:{
          axisLabel: {					//---坐标轴 标签
            show: true,					//---是否显示
            interval: 0,                //---强制显示所有标签
            inside: false,				//---是否朝内
            rotate: 0,					//---旋转角度
            margin: 5,					//---刻度标签与轴线之间的距离
            //color:'red',				//---默认取轴线的颜色
          },
          data:["no_","lowercase","noVersion","noAPI","noCRUD","noSuffix","noEnd/"]
        },
        yAxis:{
          name:'Rate',				//---轴名称
          type:'value',			//---轴类型，默认'category'
          axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} %'
          },
        },
        series: [
          {
            name: 'Rate',
            type: 'bar',
            itemStyle:{					//---图形形状
              barBorderRadius: [25, 25, 0, 0],
              color: function(params) {
                // build a color map as your need.
                var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
                return colorList[params.dataIndex]
              }

            },
            barWidth:'40%',
            z:10,
            data: [this.validateResult.categoryResult[13]*100,this.validateResult.categoryResult[14]*100,this.validateResult.categoryResult[15]*100,
              this.validateResult.categoryResult[16]*100,this.validateResult.categoryResult[17]*100,this.validateResult.categoryResult[18]*100,
              this.validateResult.categoryResult[19]*100]
          }
        ]
      })
    },
    cateResult(){
      var that=this
      axios
        .get('http://localhost:8080/empirical-result', {
          params: {
            category:this.category
          }
        })
        .then(/*response => (this.validateResult = response.data)*/
        function (response){
          that.validateResult = response.data
          console.log("validateResult"+that.validateResult)
          that.drawBar();
          that.drawPie();
        })
        .catch(function (error) { // 请求失败处理
          console.log("cateAjaxerror"+error);
        });


    }
  },
  //调用
  mounted(){
    this.$nextTick(function() {
      console.log("in mounted")
      this.drawTree('echarts-tree-chart')
      this.cateResult()
    })
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

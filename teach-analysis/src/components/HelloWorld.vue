<template>
  <div class="index">
    <div class="indexTitle">
      <el-row>
        <el-col :span="8">
          <div class="indexTitleLeft">
            {{courseName}}{{sourseTitle}}
            <!-- <el-button type="primary" @click="httpAiClsresult">后端测试</el-button> -->
            <!-- <el-button type="primary" @click="httpAiAnaly">后端测试2</el-button>  -->  
            </div>
        </el-col>
        <el-col :span="8"><div class="indexTitleMiddle">教学分析报告</div></el-col>
        <el-col :span="8"><div class="indexTitleRight">{{className}}</div></el-col>
      </el-row>
    </div>
    <div class="indexContent">
      <div class="indexContentLeft">
        <div class="indexContentLeftTop">
          <div class="indexContentLeftTopPlayer">
            <div class="playerTitle">
              <div style="margin-left:25px;margin-top:8px">
                <font style="color:#ffffff;font-size:16px">{{courseTime}}</font>>
              </div>
            </div>
            <div style="text-align:right;margin-right:30px;margin-top:28px">
              <font style="color:#ffffff;font-size:10px">{{roomName}}</font>>
            </div>
            <div style="height:187px;width:332px;background-color:#ff0000;margin:18px auto;">
              <video-player  class="video-player vjs-custom-skin"
                 ref="videoPlayer" :playsinline="true" :options="playerOptions" />
            </div>
          </div> 
          <div class="indexContentLeftTopCount">
            <div class="countTitle">
              <div style="margin-left:8px;margin-top:6px">
                <font style="color:#ffffff;font-size:19px;">课堂成果分析</font>
              </div>         
            </div>

            <div class="countContext">
              <div class="countContextStudent">  
                <div style="position:absolute;height:40px;width:100px;margin-top:75px;margin-left:70px">
                  <div style="color:#ffffff;font-size:25px;text-align:center">{{resultStudentTotal}}</div>
                  <div style="color:#ffffff;font-size:12px;text-align:center">学生成果</div>
                </div>             
                <div id="studentResult" style="width: 100%;height: 100%;"></div>
              </div>
              <div class="countContextAll">
               <div style="position:absolute;height:40px;width:100px;margin-top:75px;margin-left:55px">
                  <div style="color:#ffffff;font-size:45px;text-align:center">{{resultAllTotal}}</div>
                  <div style="color:#ffffff;font-size:18px;text-align:center">成果数量</div>
                </div>               
                <div id="dataResult" style="width: 100%;height: 100%;float:left;"></div>
              </div>
              <div class="countContextTeacher">
                <div style="position:absolute;height:40px;width:100px;margin-top:75px;margin-left:70px">
                  <div style="color:#ffffff;font-size:25px;text-align:center">{{resultTeacherTotal}}</div>
                  <div style="color:#ffffff;font-size:12px;text-align:center">教师成果</div>
                </div>              
                <div id="teacherResult" style="width: 100%;height: 100%;float:left;"></div>
              </div>              
            </div>            
          </div>        
        </div>
        <div class="indexContentLeftButtom">
          <div class="indexContentLeftButtomLine">
            <div class="lineTip">
              <div :class="line0Class" @click="lineSelectClick(0)">
                <font style="padding-left:12px;padding-top:5px;display:block;">
                  情感分析
                </font>
              </div>
              <div :class="line1Class" @click="lineSelectClick(1)">
                <font style="padding-left:12px;padding-top:5px;display:block;">
                  行为分析
                </font>              
              </div>
              <div :class="line2Class" @click="lineSelectClick(2)">
                <font style="padding-left:12px;padding-top:5px;display:block;">
                  发言分析
                </font>               
              </div>
              <div :class="line3Class" @click="lineSelectClick(3)">
                <font style="padding-left:12px;padding-top:5px;display:block;">
                  活跃分析
                </font>                 
              </div>
            </div>
  
            <div class="linePicture">
              <div id="linePicture0" v-show="linePictureSelect == 0" style="width: 1120px;height: 300px"></div>
              <div id="linePicture1" v-show="linePictureSelect == 1" style="width: 1120px;height: 300px"></div>
              <div id="linePicture2" v-show="linePictureSelect == 2" style="width: 1120px;height: 300px"></div>
              <div id="linePicture3" v-show="linePictureSelect == 3" style="width: 1120px;height: 300px"></div>
            </div>
            <div class="linePictureInfo"> 
              <div @click="stepClick(stepOne)" style="text-align:center;width:110px;height:58px;position:absolute;" v-for="stepOne in step" v-bind:style="getStepStyle(stepOne)">
                <el-tooltip effect="dark" placement="top-start"> 
                  <div slot="content">{{getStepName(stepOne.type)}} 时间:{{timeToFormatMinSec(stepOne.begin)}}-{{timeToFormatMinSec(stepOne.end)}}</div>
                  <span  style="width:100%;height:100%;color:#ff0000;font-size:20px">
                    <!-- {{getStepName(stepOne.type)}} -->
                  </span>                  
                </el-tooltip>
              </div>
            </div>      
          </div>
          <div class="indexContentLeftButtomCount">
            <div class="indexContentLeftButtomCountTeacher">
              <div style="color:#ffffff;margin-left:35px;margin-top:5px">
                {{setpSelectName}}环节
              </div>
              <div id="teacherPie1" style="width: 100%;height: 100%;float:left;"></div>
              <div class="teacherPie1Bg">
                <div style="text-align:center;margin-top:55px">
                  <font style="color:#ffffff;font-size:25px;text-align:center">{{setpSelectSpendTime}}</font>
                  <font style="color:#ffffff;font-size:12px;text-align:center">分钟</font>
                </div>
                <div style="color:#ffffff;font-size:12px;text-align:center">此环节时长</div>
              </div>                              
            </div>
            <div class="indexContentLeftButtomCountWordCloud">
              <div class="titleDiv" >
                <font style="color:#ffffff;margin-top:4px;display:block">教学主题</font>
              </div>
              <div id="wordCloudDiv"></div>  
              <!-- <div class="roundDiv"></div>  -->           
            </div>
            <div class="indexContentLeftButtomCountData">
              <div class="titleDiv">
                <font style="color:#ffffff;margin-top:4px;display:block">数据分析</font>
              </div>
              <div class="contextDiv" style="color:#ffffff">
                <div id="pieDataCount0" v-show="linePictureSelect == 0" style="width: 356px;height: 220px;"></div>
                <div id="pieDataCount1" v-show="linePictureSelect == 1" style="width: 356px;height: 220px;"></div>
                <div id="pieDataCount2" v-show="linePictureSelect == 2" style="width: 356px;height: 220px;"></div>
                <div v-show="linePictureSelect == 3" style="width: 356px;height: 220px;text-align:center">
                  <!-- <div style="color:#ffffff;margin-top:100px;text-align:center">结合教室拍摄截图的活跃度热力图</div> -->
                  <img :src="acthotsSrc" style="width:80%;height:80%;margin-top:35px">
                </div>
              </div> 
            </div>                        
          </div>
        </div>
      </div>
      <div class="indexContentRight">
        <div class="top10Title">
           <font style="color:#ffffff;font-size:18px;padding-left:12px;padding-top:5px;display:block;">
              课堂得分 TOP 10
           </font>              
        </div>
        <studentInfo v-for="student in studentTop10" :name="student.name" :sex="student.sex" :mark="student.mark" :pictureUrl="student.pictureUrl">
        </studentInfo>          
      </div>
    </div>

<!--     <el-button type="primary" @click="querySubmit">后端测试1920*1080</el-button>
    <h1>{{ result }}</h1> -->

   
  </div>
</template>

<script>
import StudentInfo from './StudentInfo'

export default {
  name: 'HelloWorld',
  components: {StudentInfo},
  data () {
    return {
      result: 'result',
      courseName:"大学英文",
      sourseTitle:" 第五讲",
      courseTime:"2019/1/28 10:30-12:00",
      roomName:"第一教学楼302",
      className:"计算机 1班",
      sourcesSrc: "/analysis/enqiang.mp4",
//courseName: "新员工培训", sourseTitle: "第一讲", className: "测试部门", time: "2019-01-16 / 16:00:00~17:18:00", source: "enqiang.mp4",
      linePictureSelect:0,
      line0Class:"lineSelect",
      line1Class:"lineNoSelect",
      line2Class:"lineNoSelect",
      line3Class:"lineNoSelect",

      //charts: '',
      //opinion:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
      opinionStudentData:[
        {value:15, name:'讨论墙'},
        {value:10, name:'小组板书'},
        {value:5, name:'小组截图'},
        {value:20, name:'文档'}
      ],      
      opinionDataResult:[
        {value:40, name:'教师成果'},
        {value:50, name:'学生成果'},
      ],
      opinionTeacherData:[
        {value:15, name:'板书'},
        {value:12, name:'截图'},
        {value:13, name:'课件'}
      ],
      xAxisDataTime : [0,60,120,180,240,300,360],
      emotionXAxisData : ["00:00","00:10","00:20","00:30","00:40","00:50","00:60"],
      emotionSeriesData : [240, 132, 101, 134, 90, 230, 210],
      behaveXAxisDataFormat : ["10:00","10:10","10:20","10:30","10:40","10:50","10:60"],
      behaveSeriesDataStandup : [140, 132, 101, 134, 90, 230, 210],   
      behaveSeriesDataHandup : [240, 232, 101, 134, 90, 230, 210],
      behaveSeriesDataReadWrite : [340, 332, 101, 134, 90, 230, 210],
      behaveSeriesDataTurn : [440, 442, 101, 134, 90, 230, 210],
      behaveSeriesDataListen : [540, 532, 101, 134, 90, 230, 210],  
      soundData :{
        time:['00:00', '00:30', '00:60','00:00', '00:30', '00:60','00:00', '00:30', '00:60','00:00', '00:30'],
        soundFrom:['声源1', '声源2', '声源3','声源4', '声源5', '声源6', '声源7'],
        data:[[0,1,15],[0,2,15],[0,3,15],[3,2,15],[3,3,15],[3,4,15]],
      },
      activesXAxisData : ["00:01","00:11","00:21","00:31","00:41","00:51","00:61"],
      activesSeriesData : [240, 132, 101, 134, 90, 230, 210],      
      step: [
        {
            "end": 2580,
            "id": 1,
            "type": 3,
            "begin": 61,
            "good": 0
        },
        {
            "end": 2640,
            "id": 2,
            "type": 0,
            "begin": 2581,
            "good": 0
        },
        {
            "end": 3150,
            "id": 3,
            "type": 1,
            "begin": 3001,
            "good": 0
        },
        {
            "end": 3420,
            "id": 4,
            "type": 2,
            "begin": 3151,
            "good": 0
        }
      ],
      stepSelect : {
        "end": 2580,
        "id": 1,
        "type": 3,
        "begin": 61,
        "good": 0
      },
      timespan: 4680,

      // opinionTeacherData1:[
      //   {value:15, name:'时长'},
      //   {value:45, name:''}
      // ], 
      opinionTeacherData2:[
        {value:65, name:'满意'},
        {value:45, name:''}
      ],
      wordcnt:[],
      worldCloudoptionData : [
        {
          name: "Jayfee",
          value: 0.5
        }, {
          name: "占道",
          value: 0.3
        }, {
          name: "供热发展",
          value: 0.5
        }, {
          name: "规划管理",
          value: 0.4
        }
      ], 

      emptmap:[],
      opinionDataCount0:{
        seriesData: [
          {value:335, name:'正常'},
          {value:310, name:'愉悦'}
        ],
      },

      opinionDataCount:{
        seriesData: [
          {value:335, name:'听讲'},
          {value:310, name:'读写'},
          {value:234, name:'站立'},
          {value:135, name:'举手'},
          {value:1548, name:'转身'}
        ],
      },
      spkdiz:[],
      opinionDataCount2:{
        //legendData: ['直接访问','邮件营销2'],
        seriesData: [
          {value:335, name:'教师参与'},
          {value:130, name:'学生参与'},
          {value:20, name:'其他'},
        ],
      },     
      acthots:[],
      acthotsSrc:'/analysis/enqiang_heatmap_00-00_78-00.jpg',
      studentTop10: [
        { name: '苏沐橙',sex: 1,mark: 100, pictureUrl: './static/head/student1.png' },
        { name: '叶修',sex: 0,mark: 99, pictureUrl: './static/head/student2.png'  },
        { name: '唐柔',sex: 1,mark: 98, pictureUrl: './static/head/student3.png'  },
        { name: '伍晨',sex: 1,mark: 97, pictureUrl: './static/head/student4.png'  },
        { name: '方锐',sex: 0,mark: 97, pictureUrl: './static/head/student5.png'  },
        { name: '安文逸',sex: 1,mark: 93, pictureUrl: './static/head/student6.png'  },
        { name: '乔一帆',sex: 0,mark: 90, pictureUrl: './static/head/student7.png'  },
        { name: '魏琛',sex: 1,mark: 89, pictureUrl: './static/head/student8.png'  },
        { name: '包荣兴',sex: 0,mark: 85, pictureUrl: './static/head/student9.png'  },
        { name: '陈果',sex: 1,mark: 80, pictureUrl: './static/head/student10.png'  }
      ],


      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "",
          //src: "/analysis/enqiang.mp4" //url地址
          src: ""
          //src: this.sourcesSrc
          //src: "http://172.31.23.184:18899/enqiang.mp4" //url地址
        }],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }

    }
  },
  computed: { 
    resultAllTotal: function(){
      var totalResult = 0;
      this.opinionDataResult.forEach(item => {
        totalResult += item.value;
      });
      return totalResult;
    },
    resultStudentTotal: function(){ 
      var totalResult = 0;
      this.opinionStudentData.forEach(item => {
        totalResult += item.value;
      });
      return totalResult;
    },    
    resultTeacherTotal: function(){ 
      var totalResult = 0;
      this.opinionTeacherData.forEach(item => {
        totalResult += item.value;
      });      
      return totalResult;
    }, 
    setpSelectName: function(){ 
      var step =this.stepSelect.type;
      if(step == 0){
        return "教师授课";
      }else if(step == 1){
        return "提问";
      }else if(step == 2){
        return "讨论";
      }else if(step == 3){
        return "挑人";
      }else if(step == -1){
        return "课堂准备";
      }else{
        return "全课堂";
      }      
    },    
    setpSelectSpendTime: function(){ 
      return Math.round((this.stepSelect.end - this.stepSelect.begin)/60);
    },    
    //0:老师授课 1:提问, 2:讨论, 3:挑人

  },
  watch: {
    stepSelect(nowStep, oldStep) {
      console.log("watch stepSelect"+nowStep);
      //阶段时长
      this.drawTeacherPie1();
      //词云
      var wordcntSelect = [];
      this.wordcnt.forEach(wordcntOneStep => {
        if(wordcntOneStep.step_id == nowStep.id){
          wordcntSelect = wordcntOneStep;
        }
      }); 

      this.worldCloudoptionData = [];
      for(var key in wordcntSelect){
        if(key == 'step_id'){
          continue;
        }
        this.worldCloudoptionData.push({name: key,value: wordcntSelect[key]});
      }
      this.drawYunCi(); 
      //底部数据统计0 
      //this.drawPieDataCount0();
      console.log("this.emptmap");
      console.log(this.emptmap);
      this.emptmap.forEach(emptmapOne => {
        if(nowStep.id == emptmapOne.step_id){
          this.opinionDataCount0.seriesData = [
            {value:(100-emptmapOne.num), name:'正常'},
            {value:emptmapOne.num, name:'愉悦'}
          ];
        }
      });   
      this.drawPieDataCount0();     
      //底部数据统计1
      var beginTime = nowStep.begin;
      var endTime = nowStep.end;
      var listenNum = 0;
      var readWriteNum = 0;
      var standupNum = 0;
      var handupNum = 0;
      var turnNum = 0;
      var count = 0; 
      
      for ( var i = 0; i <this.xAxisDataTime.length; i++){
        if(this.xAxisDataTime[i]>=beginTime && this.xAxisDataTime[i]<=nowStep.end){
          count++;
          listenNum += this.behaveSeriesDataListen[i];
          readWriteNum += this.behaveSeriesDataReadWrite[i];
          standupNum += this.behaveSeriesDataStandup[i];
          handupNum += this.behaveSeriesDataHandup[i];
          turnNum += this.behaveSeriesDataTurn[i];
        }
      } 
      listenNum = listenNum/count;
      this.opinionDataCount.seriesData = [
        {name:'听讲', value:listenNum},
        {name:'读写', value:readWriteNum/count},
        {name:'站立', value:standupNum/count},
        {name:'举手', value:handupNum/count},
        {name:'转身', value:turnNum/count}
      ];
      this.drawPieDataCount1();
      //底部数据统计2
      this.spkdiz.forEach(spkdizOne => {
        if(nowStep.id == spkdizOne.step_id){

          this.opinionDataCount2.seriesData = [
            {value:spkdizOne.speaker1, name:'教师参与'},
            {value:spkdizOne.speaker2, name:'学生参与'},
            {value:spkdizOne.speaker3, name:'其他'},
          ];
        }
      
      });  
      this.drawPieDataCount2(); 
      //底部数据统计3 图片
      this.acthots.forEach(acthotsOne => {
        if(nowStep.id == acthotsOne.step_id){

          this.acthotsSrc = '/analysis/'+acthotsOne.img;
        }
      
      });       
         
      //播放
      //let _time = this.$refs.videoPlayer.player.currentTime(); //已播放时长
      // console.log("this.$refs.videoPlayer.player.src");
      // console.log(this.$refs.videoPlayer.player.src());
      // console.log(this.$refs.videoPlayer.player.src()!="");
      if(this.$refs.videoPlayer.player.src()!=""){
        this.$refs.videoPlayer.player.currentTime(beginTime);
        this.$refs.videoPlayer.player.play();
      }

    }
  },
  methods: {
    getStepName: function(step){ 
      if(step == 0){
        return "教师授课";
      }else if(step == 1){
        return "提问";
      }else if(step == 2){
        return "讨论";
      }else if(step == 3){
        return "挑人";
      }else if(step == -1){
        return "课堂准备";
      }else{
        return "全课堂";
      } 
    },
    getStepStyle: function(stepOne){
      // console.log("getStepStyle");
      // console.log(stepOne);
      var marginTop = '0px';
      var marginLeft = stepOne.id*120 + 'px';
      if(stepOne.type == -2){
        marginTop ='8px';
        marginLeft = '-120px';
      }else{
        var mid = (stepOne.begin+stepOne.end)/2;
        var left = mid/this.timespan*1120;
        marginLeft = left + 'px';
      }
      var style = {
        'backgroundImage':'url(./static/step'+stepOne.type+'.png)',
        'margin-left': marginLeft,
        'margin-top':marginTop,

      };
      return style;     
    },    
    timeToFormatMinSec:function(times){
      var result = '00:00';
      var minute,second
      if (times > 0) {
        minute = Math.floor(times / 60);
        if (minute < 10) {
          minute = "0"+minute;
        }

        second = Math.floor((times - 60 * minute) % 60);
        if (second < 10) {
          second = "0"+second;
        }
        //result = hour+':'+minute+':'+second;
        result = minute+':'+second;
      }
      return result;  
    },
    httpClassInfo: function() {
      //console.log("httpAiClsresult");    
      let vm = this;
      this.$http.get('/analysis/ai/info',{})
        .then(function(response){
        vm.courseName = response.body.data.courseName;
        vm.sourseTitle = " "+response.body.data.sourseTitle;
        vm.className = response.body.data.className;
        vm.courseTime = response.body.data.time;
        vm.roomName = response.body.data.room;
        //vm.playerOptions.sources.src = "/analysis/"+response.body.data.source;
        //vm.$refs.videoPlayer.player.play();
        this.$refs.videoPlayer.player.src("/analysis/"+response.body.data.source);
        //courseName: "新员工培训", sourseTitle: "第一讲", className: "测试部门", time: "2019-01-16 / 16:00:00~17:18:00", source: "enqiang.mp4",
        },function(response){
          //响应错误回调
        }
      );    
    },  

    httpStudentInfo: function() {
      //console.log("httpAiClsresult");    
      let vm = this;
      this.$http.get('/analysis/ai/student',{})
        .then(function(response){
        vm.studentTop10 = [];
        response.body.data.students.forEach(item => {
          var studentOne = { name: item.name,sex: item.sex,mark: item.score, pictureUrl: item.pic };
          //console.log(item.name);
          vm.studentTop10.push(studentOne);
        });         
        },function(response){
          //响应错误回调
        }
      );    
    },    
    httpAiClsresult: function() {
      //console.log("httpAiClsresult");    
      let vm = this;
      this.$http.get('/analysis/ai/clsresult',{})
        .then(function(response){
          //响应成功回调
          //console.log(response);
          vm.opinionDataResult = [
            {name:'教师成果',value:response.body.data.total.teacher},
            {name:'学生成果',value:response.body.data.total.student}
          ];  
          vm.opinionStudentData = [
            {name:'讨论墙', value:response.body.data.student.讨论墙},
            {name:'小组板书', value:response.body.data.student.小组板书},
            {name:'小组截图', value:response.body.data.student.小组截图},
            {name:'文档', value:response.body.data.student.文档}
          ];                  
          vm.opinionTeacherData = [
            {name:'板书', value:response.body.data.teacher.板书},
            {name:'截图', value:response.body.data.teacher.截图},
            {name:'课件', value:response.body.data.teacher.课件}
          ];
          vm.drawPieStudentResult();
          vm.drawPieDataResult();
          vm.drawPieTeacherResult();      
        },function(response){
          //响应错误回调
        }
      );    
    },
    httpAiAnaly: function() {
      //console.log("httpAiAnaly");     
      let vm = this;
      //this.$http.get('http://scuclass.ruijie.com.cn/analysis/ai/analy',{})
      this.$http.get('/analysis/ai/analy',{})
        .then(function(response){
          //响应成功回调
          console.log(response);
          //console.log(response.body.data.emotion);
          //折线图0
          vm.emotionXAxisData = [];
          vm.emotionSeriesData = [];
          response.body.data.emotion.forEach(item => {
            var timeToFormat = vm.timeToFormatMinSec(item.time);
            vm.emotionXAxisData.push(timeToFormat);
            vm.emotionSeriesData.push(item.num);
          });            
          vm.drawLinePicture0();
          //折线图1 
          vm.xAxisDataTime = [];
          vm.behaveXAxisDataFormat = [];
          vm.behaveSeriesDataStandup = [];
          vm.behaveSeriesDataHandup = [];
          vm.behaveSeriesDataReadWrite = [];
          vm.behaveSeriesDataTurn = [];
          vm.behaveSeriesDataListen = [];
          response.body.data.behave.forEach(item => {
            vm.xAxisDataTime.push(item.time);
            vm.behaveSeriesDataStandup.push(item.standup);
            vm.behaveSeriesDataHandup.push(item.handup);
            vm.behaveSeriesDataReadWrite.push(item.readWrite);
            vm.behaveSeriesDataTurn.push(item.turn);
            vm.behaveSeriesDataListen.push(item.listen);
            var timeToFormat = vm.timeToFormatMinSec(item.time);
            vm.behaveXAxisDataFormat.push(timeToFormat);            
          });            
          vm.drawLinePicture1();  
          //折线图2 发言
          vm.soundData.time = [];
          vm.soundData.soundFrom = [];
          vm.soundData.data = [];
          var i = 0;
          response.body.data.seg.forEach(itemSounds => {
            var soundFromOne = '声源'+(i+1);
            vm.soundData.soundFrom.push(soundFromOne);
            itemSounds.forEach(itemData => {
              for(var sStartTime=itemData.bg;sStartTime<=itemData.ed;sStartTime++){
                var soundOne = [i,sStartTime,1];
                vm.soundData.data.push(soundOne);
              }
            });
            i++;
          });
          for(var timeStart=0;timeStart<response.body.data.timespan;timeStart++){
            var timeToFormat = vm.timeToFormatMinSec(timeStart);
            vm.soundData.time.push(timeToFormat);
          }
          vm.drawLinePicture2(); 
          //折线图3 活跃
          vm.activesXAxisData = [];
          vm.activesSeriesData = [];
          response.body.data.actives.forEach(item => {
            var timeToFormat = vm.timeToFormatMinSec(item.time);
            vm.activesXAxisData.push(timeToFormat);
            vm.activesSeriesData.push(item.num);
          });            
          vm.drawLinePicture3();          
          //阶段环节
          vm.step = response.body.data.step;
          vm.stepSelect = response.body.data.step[0]; 
          vm.drawTeacherPie1();
          //云词
          vm.wordcnt = response.body.data.wordcnt;
          vm.worldCloudoptionData = [];
          var wordcntSelect = response.body.data.wordcnt[0];
          //console.log(wordcnt);
          for(var key in wordcntSelect){
            if(key == 'step_id'){
              continue;
            }
            vm.worldCloudoptionData.push({name: key,value: wordcntSelect[key]});
          }
          vm.drawYunCi(); 
          //统计2
          vm.spkdiz = response.body.data.spkdiz;
          //统计0 
          vm.emptmap = response.body.data.emptmap;
          //统计3
          vm.acthots = response.body.data.acthots;

        },function(response){
          //响应错误回调
        }
      );    
    },    
    lineSelectClick(lineId){
      this.line0Class = "lineNoSelect";
      this.line1Class = "lineNoSelect";
      this.line2Class = "lineNoSelect";
      this.line3Class = "lineNoSelect";
      if(lineId==0){
        this.line0Class = "lineSelect";
      }else if(lineId==1){
        this.line1Class = "lineSelect";
      }else if(lineId==2){
        this.line2Class = "lineSelect";
      }else if(lineId==3){
        this.line3Class = "lineSelect";
      }
      this.linePictureSelect = lineId;
      console.log(this.linePictureSelect);
    },
    stepClick(stepOne){
      console.log("Click stepId " + stepOne.id);
      this.stepSelect = stepOne; 
    },
    drawPieStudentResult(){
        //let myEcharts = this.$echarts.init(document.getElementById('myEcharts'))
      this.charts = this.$echarts.init(document.getElementById('studentResult'));
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)'
        },
        color:['#61BEEF', '#B4EFF6','#7BE1F2','#83F6D3'],
         // legend: {
         //   orient: 'vertical',
         //   x: 'left',
         //   data:this.opinion
         // },
        series: [
          {
            name:'学生成果',
            type:'pie',
            radius:['40%','55%'],
            center: ['50%', '55%'],
            avoidLabelOverlap: false,
            labelLine: {
              show: true,
              length:8,
              length2:8
            },
            data:this.opinionStudentData,

                  // label: {
                  //   normal: {
                  //     show: true,
                  //     position: 'center'
                  //   },
                  //   emphasis: {
                  //     show: true,
                  //     textStyle: {
                  //       fontSize: '30',
                  //       fontWeight: 'blod'
                  //     }
                  //   }
                  // },
                  // labelLine: {
                  //   normal: {
                  //     show: true
                  //   }
                  // },             
          }
        ]
      };
      this.charts.setOption(option);
    },  
    drawPieDataResult(){
      this.charts = this.$echarts.init(document.getElementById("dataResult"));

      let option = {
          // title : {
          //     text: '',
          //     subtext: '',
          //     x:'center'
          // },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          color:['#44DDF0', '#4CFAD1'],
          legend: {
            data:['教师成果','学生成果'],
            bottom: -5,
            itemWidth:15,//图例的宽度
            itemHeight:10,//图例的高度
            textStyle:{//图例文字的样式
                color:'#ffffff',
                fontSize:12
            }
          },
          series : [
              {
                  name: '成果',
                  type: 'pie',
                  radius: ['50%', '70%'],
                  center: ['47%', '52%'],
                  //data: aa.seriesData,
                  data: this.opinionDataResult,
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      show: false,
                      textStyle: {
                        fontSize: '30',
                        fontWeight: 'blod'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
              }
          ]
      };

      this.charts.setOption(option);
    },  
    drawPieTeacherResult(){
        //let myEcharts = this.$echarts.init(document.getElementById('myEcharts'))
      this.charts = this.$echarts.init(document.getElementById('teacherResult'));
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)'
        },
        color:['#61BEEF', '#B4EFF6','#7BE1F2','#83F6D3'],
         // legend: {
         //   orient: 'vertical',
         //   x: 'left',
         //   data:this.opinion
         // },
        series: [
          {
            name:'教师成果',
            type:'pie',
            radius:['40%','55%'],
            center: ['50%', '55%'],
            avoidLabelOverlap: false,
            // labelLine: {
            //   show: true,
            //   length:6,
            //   length2:6
            // },             
            data:this.opinionTeacherData
          }
        ]
      };
      this.charts.setOption(option);
    },
    drawPieDataCount0(){
        //let myEcharts = this.$echarts.init(document.getElementById('myEcharts'))
      this.charts = this.$echarts.init(document.getElementById("pieDataCount0"));

      let option = {
          title : {
              text: '',
              subtext: '',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          color:['#44DDF0', '#78D780','#FCE872','#AB91ED','#E97FA0'],
          legend: {
            data:['正常','愉悦'],
            bottom: 5,
            itemWidth:15,//图例的宽度
            itemHeight:10,//图例的高度
            textStyle:{//图例文字的样式
                color:'#ffffff',
                fontSize:12
            }
          },        
          series : [
              {
                  name: '姓名',
                  type: 'pie',
                  radius: ['40%', '60%'],
                  //center: ['50%', '50%'],
                  //data: aa.seriesData,
                  data: this.opinionDataCount0.seriesData,
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };

      this.charts.setOption(option);
    }, 
    drawPieDataCount1(){
        //let myEcharts = this.$echarts.init(document.getElementById('myEcharts'))
      this.charts = this.$echarts.init(document.getElementById("pieDataCount1"));

      let option = {
          title : {
              text: '',
              subtext: '',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          color:['#44DDF0', '#78D780','#FCE872','#AB91ED','#E97FA0'],
          legend: {
            data:['听讲','读写',"站立","举手","转身"],
            bottom: 5,
            itemWidth:15,//图例的宽度
            itemHeight:10,//图例的高度
            textStyle:{//图例文字的样式
                color:'#ffffff',
                fontSize:12
            }
          },        
          series : [
              {
                  name: '姓名',
                  type: 'pie',
                  radius: ['40%', '60%'],
                  //center: ['50%', '50%'],
                  //data: aa.seriesData,
                  data: this.opinionDataCount.seriesData,
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };

      this.charts.setOption(option);
    }, 
    drawPieDataCount2(){
        //let myEcharts = this.$echarts.init(document.getElementById('myEcharts'))
      this.charts = this.$echarts.init(document.getElementById("pieDataCount2"));

      let option = {
          title : {
              text: '',
              subtext: '',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          color:['#44DDF0', '#78D780','#FCE872','#AB91ED','#E97FA0'],
          legend: {
            data:['教师参与','学生参与',"其他"],
            bottom: 5,
            itemWidth:15,//图例的宽度
            itemHeight:10,//图例的高度
            textStyle:{//图例文字的样式
                color:'#ffffff',
                fontSize:12
            }
          },        
          series : [
              {
                  name: '姓名',
                  type: 'pie',
                  radius: ['40%', '60%'],
                  //center: ['50%', '50%'],
                  //data: aa.seriesData,
                  data: this.opinionDataCount2.seriesData,
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };

      this.charts.setOption(option);
    },      
    drawLinePicture0(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('linePicture0'));
        // 绘制图表
        let option = {
            title: {
                text: ''
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            // legend: {
            //     data:['站立','举手','读写','转身','听讲']
            // },
            //backgroundColor:'rgba(255, 255, 255, 0)',
            toolbox: {
                feature: {
                    //saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
                        lineStyle: {

                            color: '#479DA0',//左边线的颜色

                        }
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    //data : ["00:00","00:10","00:20","00:30","00:40","00:50","00:60"],
                    data : this.emotionXAxisData,
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#479DA0',//左边线的颜色
                            //color: '#ff0000',
                            width:'2'//坐标线的宽度
                        }
                    },
                }
            ],

            yAxis : [
                {
                    type : 'value',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            type: 'arrow',
                            color: '#5F737B',//左边线的颜色
                            //color: '#ff0000',
                            width:'2'//坐标线的宽度
                        }
                    },
                    splitLine: {
                      show: true,
                      lineStyle:{
                        color: ['#5F737B'],
                        width: 1,
                        type: 'solid'
                      }
                    },                    
                }
            ],
            series : [
                {
                    name:'情感',
                    type:'line',
                    stack: '总量',
                    areaStyle: {
                      normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: '#309AAE'},
                            {offset: 1, color: '#309AAE00'}
                          ]
                        ),       
                      },  
  
                    },
                    lineStyle: {
                      color: '#05BDC5',
                    },   
                    itemStyle: {
                      color: '#05BDC5',
                    },               
                    data:this.emotionSeriesData,
                }
            ]
        };

        myChart.setOption(option);
    },      
    drawLinePicture1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('linePicture1'));
        // 绘制图表
        let option = {
            title: {
                text: ''
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            // legend: {
            //     left:0,
            //     top:50,
            //     orient :'vertical',
            //     data:['听讲','读写','站立','举手','转身'],
            //     itemWidth:15,//图例的宽度
            //     itemHeight:10,//图例的高度
            //     textStyle:{//图例文字的样式
            //         color:'#ffffff',
            //         fontSize:12
            //     }
            // },

            toolbox: {
                feature: {
                    //saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    //data : ["00:00","00:10","00:20","00:30","00:40","00:50","00:60"],
                    data : this.behaveXAxisDataFormat,
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#479DA0',//左边线的颜色
                            //color: '#ff0000',
                            width:'2'//坐标线的宽度
                        }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            type: 'arrow',
                            color: '#5F737B',//左边线的颜色
                            //color: '#ff0000',
                            width:'2'//坐标线的宽度
                        }
                    },
                    splitLine: {
                      show: true,
                      lineStyle:{
                        color: ['#5F737B'],
                        width: 1,
                        type: 'solid'
                      }
                    },                    
                }
            ], 
            series : [
                {
                    name:'站立',
                    type:'line',
                    stack: '站立总量',
                    areaStyle: {
                      normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: '#FCE872'},
                            {offset: 1, color: '#FCE87200'}
                          ]
                        ),       
                      },  
  
                    },
                    lineStyle: {
                      color: '#FCE872',
                    },   
                    itemStyle: {
                      color: '#FCE872',
                    },               
                    data:this.behaveSeriesDataStandup,
                },
                {
                    name:'举手',
                    type:'line',
                    stack: '举手总量',
                    areaStyle: {
                      normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: '#AB91ED'},
                            {offset: 1, color: '#AB91ED00'}
                          ]
                        ),       
                      },  
  
                    },
                    lineStyle: {
                      color: '#AB91ED',
                    },   
                    itemStyle: {
                      color: '#AB91ED',
                    },               
                    data:this.behaveSeriesDataHandup,
                }, 
                {
                    name:'读写',
                    type:'line',
                    stack: '读写总量',
                    areaStyle: {
                      normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: '#78D780'},
                            {offset: 1, color: '#78D78000'}
                          ]
                        ),       
                      },  
  
                    },
                    lineStyle: {
                      color: '#78D780',
                    },   
                    itemStyle: {
                      color: '#78D780',
                    },               
                    data:this.behaveSeriesDataReadWrite,
                },  
                {
                    name:'转身',
                    type:'line',
                    stack: '转身总量',
                    areaStyle: {
                      normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: '#E97FA0'},
                            {offset: 1, color: '#E97FA000'}
                          ]
                        ),       
                      },  
  
                    },
                    lineStyle: {
                      color: '#E97FA0',
                    },   
                    itemStyle: {
                      color: '#E97FA0',
                    },               
                    data:this.behaveSeriesDataTurn,
                },
                {
                    name:'听讲',
                    type:'line',
                    stack: '听讲总量',
                    areaStyle: {
                      normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: '#44DDF0'},
                            {offset: 1, color: '#44DDF000'}
                          ]
                        ),       
                      },  
  
                    },
                    lineStyle: {
                      color: '#44DDF0',
                    },   
                    itemStyle: {
                      color: '#44DDF0',
                    },               
                    data:this.behaveSeriesDataListen,
                },                                                            
            ]
        };

        myChart.setOption(option);
    }, 
    drawLinePicture2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('linePicture2'));
        // 绘制图表
      // soundData :{
      //   time:['00:00', '00:30', '00:60','00:00', '00:30', '00:60','00:00', '00:30', '00:60','00:00', '00:30'],
      //   soundFrom:['声源1', '声源2', '声源3','声源4', '声源5', '声源6', '声源7'],
      //   data:[[0,1,3],[0,2,15],[0,3,15],[3,2,15],[3,3,15],[3,4,15]],
      // },        
        var xData = this.soundData.time;
        var yData = this.soundData.soundFrom;
        var data = this.soundData.data.map(function (item) {
          return [item[1], item[0], item[2]];
        });

        var option = {
            // title: {
            //     text: 'Punch Card of Github',
            //     link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
            // },
            // legend: {
            //     data: ['Punch Card'],
            //     left: 'right'
            // },
            tooltip: {
                position: 'top',
                formatter: function (params) {
                    //return params.value[2] + ' 时间:' + hours[params.value[0]] + ' 声源:' + days[params.value[1]];
                    return xData[params.value[0]] + ' ' + yData[params.value[1]];
                }


            },
            grid: {
                left: 2,
                bottom: 10,
                right: 10,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: xData,
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#479DA0',//左边线的颜色
                        //color: '#ff0000',
                        width:'2'//坐标线的宽度
                    }
                }, 

            },
            yAxis: {
                type: 'category',
                data: yData,
                axisLine: {
                    show: false,
                    lineStyle: {
                      color: ['#5F737B'],
                      type: 'solid'
                    }
                }
            },
            series: [{
                name: 'Punch Card',
                type: 'scatter',
                data: data,
                //symbol: 'rect',
                //symbol: 'path://M250 150 L150 350 L350 350 Z',
                //symbol: 'path://M0 0 L0 100 L300 100 L300 0 Z',
                //symbol: 'image:./static/head/student10.png',
                //symbol: 'image:../assets/indexContentLeftTopCount.png',
                symbolSize: 3,
                itemStyle: {
                  color: '#309AAE',
                  opacity: 0.4
                },                
                //icon:'./static/head/student10.png',
                // symbolSize: function (val) {
                //     return val[2] * 2;
                // },
                // animationDelay: function (idx) {
                //     return idx * 5;
                // }
// formatter:'<div class="info"><img src="../images/tx_ico.png" alt=""><p>2017年5月12日 8:20</p><p><span>执法人员</span>：刘艳</p><p><span>执法类型</span>：随机执法</p><p><span>执法企业</span>：苏州市华润股份有限公司</p></div>'
                // itemStyle: {
                //   color: '#128de3',
                //   opacity: 0.4
                // },
                // emphasis:{
                //   show:true,
                // }

            }]
        };

        myChart.setOption(option);
    },  
    drawLinePicture3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('linePicture3'));
        let option = {
            title: {
                text: ''
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            // legend: {
            //     data:['站立','举手','读写','转身','听讲']
            // },
            //backgroundColor:'rgba(255, 255, 255, 0)',
            toolbox: {
                feature: {
                    //saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
                        lineStyle: {

                            color: '#479DA0',//左边线的颜色

                        }
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    //data : ["00:00","00:10","00:20","00:30","00:40","00:50","00:60"],
                    data : this.activesXAxisData,
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#479DA0',//左边线的颜色
                            //color: '#ff0000',
                            width:'2'//坐标线的宽度
                        }
                    },
                }
            ],

            yAxis : [
                {
                    type : 'value',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            type: 'arrow',
                            color: '#5F737B',//左边线的颜色
                            //color: '#ff0000',
                            width:'2'//坐标线的宽度
                        }
                    },
                    splitLine: {
                      show: true,
                      lineStyle:{
                        color: ['#5F737B'],
                        width: 1,
                        type: 'solid'
                      }
                    },                    
                }
            ],
            series : [
                {
                    name:'活跃',
                    type:'line',
                    stack: '总量',
                    areaStyle: {
                      normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                          [
                            {offset: 0, color: '#309AAE'},
                            {offset: 1, color: '#309AAE00'}
                          ]
                        ),       
                      },  
  
                    },
                    lineStyle: {
                      color: '#05BDC5',
                    },   
                    itemStyle: {
                      color: '#05BDC5',
                    },               
                    data:this.activesSeriesData,
                }
            ]
        };

        myChart.setOption(option);
    }, 
    drawTeacherPie1(){
        //let myEcharts = this.$echarts.init(document.getElementById('myEcharts'))
      this.charts = this.$echarts.init(document.getElementById('teacherPie1'));
      var stepSelectTime = Math.round((this.stepSelect.end - this.stepSelect.begin)/60);
      var timespanTime = Math.round(this.timespan/60);
      var opinionTeacherData1 = [
        {name:'此阶段时长',value:stepSelectTime},
        {name:'其他阶段时长',value:(timespanTime-stepSelectTime)}
      ];
      this.charts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)'
        },
        color:['#61BEEF00', '#B4EFF600','#7BE1F2','#83F6D3'],
         // legend: {
         //   orient: 'vertical',
         //   x: 'left',
         //   data:this.opinion
         // },
        series: [
          {
            name:'时长',
            type:'pie',
            radius:['0%','70%'],
            center: ['50%', '45%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'blod'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
//             itemStyle: {
//                 normal: {
//                     color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{


//                      // 0% 处的颜色   
//                     offset: 0, color: 'red'  },
//                    {
//                     
//                     // 100% 处的颜色
//                    offset: 1, color: 'blue' 
//                   }], false)
//                 }
//             },

            //data:opinionTeacherData1
            data:[
              {value:stepSelectTime, name:'此阶段时长',itemStyle:
                {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [//{
                    //     offset: 0, color: 'red' // 0% 处的颜色
                    // }, 
                      {offset: 0, color: '#61BEEF00'}, // 0% 处的颜色
                       
                    //  {offset: 0.5, color: 'green' // 0% 处的颜色
                    //  }, 
                      {offset: 1, color: '#61BEEF'} // 100% 处的颜色
                    ],
                    globalCoord: true // 缺省为 false
                  }
                },
              },
              {value:0, name:'其他阶段时长'},
              {value:(timespanTime-stepSelectTime), name:'其他阶段时长'},
            ]


           }
         ]
       })
    },
  

    drawYunCi(){
      let worldCloudcharts = this.$echarts.init(document.getElementById('wordCloudDiv'))
      var worldCloudoption = {
        // title: {
        //     text: '教学主题分析',
        //     x: 'center',
        //     textStyle: {
        //         fontSize: 23,
        //         color:'#FFFFFF'
        //     }

        // },
        tooltip: {
            show: true
        },
        series: [{
            name: '教学主题分析',
            type: 'wordCloud',
            sizeRange: [15, 50],
            rotationRange: [-45, 90],
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 6
            },
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: []
        }]
      };
      worldCloudoption.series[0].data = this.worldCloudoptionData;
      worldCloudcharts.setOption(worldCloudoption);

    }

  },
  mounted(){
    // this.drawPieStudentResult();
    // this.drawPieDataResult();
    // this.drawPieTeacherResult();
    this.httpAiClsresult();

    this.httpAiAnaly();
    //this.drawLinePicture0();
    //this.drawLinePicture1();
    //this.drawLinePicture2();
    //this.drawLinePicture3();
    //this.drawTeacherPie1();
    //this.drawPieDataCount1();
    //this.drawYunCi('main5');
    this.httpStudentInfo();
    this.httpClassInfo();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
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
}*/
.index {
  background:url(../assets/mainBackground.png);
  width: 1920px;
  /*height: 1080px;*/
  height: 1080px;
}
.index .indexTitle{
  height: 110px;
  width: 100%;
}
.index .indexTitle .indexTitleLeft{
  font-family:"黑体";
  color:#4AF2CB;
  font-size:30px;
  padding-top: 40px;
  padding-left: 50px;
}
.index .indexTitle .indexTitleMiddle{
  font-family:"黑体";
  color:#FFFFFF;
  text-align:center;
  font-size:50px;
  padding-top: 30px;
}
.index .indexTitle .indexTitleRight{
  font-family:"黑体";
  color:#4AF2CB;
  text-align:right;
  font-size:30px;
  padding-top: 40px;
  padding-right: 50px;
}
.index .indexContent{
  width: 1830px;
  height: 980px;
  padding: 0px 0px;
  margin:0 auto;
  /*background-color: rgba(255,0,0,0.1); */
}
.index .indexContentLeft{
  width: 1391px;
  height: 946px;
  float: left;
  /*background-color: rgba(0,255,0,0.1); */
}
.index .indexContentLeftTop{
  width: 100%;
  height: 290px;
  float: left;
  /*background-color: rgba(0,0,255,0.1); */
}
.index .indexContentLeftTop .indexContentLeftTopPlayer{
  width: 482px;
  height: 290px;
  float: left;
  background:url(../assets/indexContentLeftTopPlayerBg.png); 
}
.indexContentLeftTopPlayer .playerTitle{
  width: 244px;
  height: 36px;
  background:url(../assets/playerTitleBg.png);
  background-size:cover;
  background-size:contain;
  margin-top: 18px;
  margin-left: 22px;
  float: left;
}
.index .indexContentLeftTop .indexContentLeftTopCount{
  width: 909px;
  height: 290px;
  float: left;
  background:url(../assets/indexContentLeftTopCount.png); 
}
.indexContentLeftTopCount .countTitle{
  width: 137px;
  height: 36px;
  background:url(../assets/countTitleBg.png);
  background-size:cover;
  background-size:contain;
  margin-top: 18px;
  margin-left: 22px;
  position: absolute;
}
.indexContentLeftTopCount .countContextStudent{
  width: 237px;
  height: 181px;
  background:url(../assets/countContextStudentBg.png);
  margin-top: 58px;
  margin-left: 42px;
  float: left;
}
.indexContentLeftTopCount .countContextAll{
  width: 221px;
  height: 221px;
  background:url(../assets/countContextAllBg.png);
  margin-top: 28px;
  margin-left: 42px;
  float: left;
}
.indexContentLeftTopCount .countContextTeacher{
  width: 237px;
  height: 181px;
  background:url(../assets/countContextTeacherBg.png);
  margin-top: 58px;
  margin-left: 42px;
  float: left;
}
.index .indexContentLeftButtom{
  width: 100%;
  height: 656px;
  float: left;
  /*background-color: rgba(255,255,0,0.1); */
  background:url(../assets/indexContentLeftButtomBg.png); 
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.index .indexContentLeftButtom .indexContentLeftButtomLine{
  width: 100%;
  height: 360px;
  /*background-color: rgba(0,255,0,0.1); */
}
.indexContentLeftButtomLine .lineTip{
  width: 180px;
  height: 300px;
  margin-left: 22px;
  margin-top: 60px;
  float: left;

  /*background-color: rgba(0,255,255,0.1);*/
}
.lineTip .lineSelect{
  width: 160px;
  height: 40px;
  background:url(../assets/lineSelect.png);
  color: #D9A93F;
  font-size:20px;
}
.lineTip .lineNoSelect{
  width: 120px;
  height: 40px;
  background:url(../assets/lineNoSelect.png);
  color:#ffffff;
  cursor:pointer;
  font-size:18px;
}
.lineTip .lineNoSelect:hover
{ 
  color: #D9A93F;
  font-size:20px;
}
.indexContentLeftButtomLine .linePicture{
  width: 1120px;
  height: 300px;
  /*background-color: rgba(0,255,255,0.1);*/
  float: left;
}
.indexContentLeftButtomLine .linePictureInfo{
  width: 1120px;
  height: 60px;
  background-color: rgba(0,255,255,0.1);
  float: left;
  font-size: 20px;
}
.linePictureInfo span{
  display: block;
  position: absolute;
  color: #6FAE92;
  margin-top: 10px;
  cursor:pointer;
}
.index .indexContentLeftButtom .indexContentLeftButtomCount{
  width: 1300px;
  height: 256px;
  margin:0 auto;
  /*background-color: rgba(255,255,0,0.1); */
}
.index .indexContentLeftButtom .indexContentLeftButtomCount .indexContentLeftButtomCountTeacher{
  width: 456px;
  height: 256px;
  float: left;
  background:url(../assets/indexContentLeftButtomCountTeacher.png); 
}
.indexContentLeftButtomCountTeacher .teacherPie1Bg{
  position:absolute;
  height:187px;
  width:187px;
  /*float: left;*/
  margin-top:22px;
  margin-left:134px;
  background:url(../assets/stepTimeBg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.index .indexContentLeftButtom .indexContentLeftButtomCount .indexContentLeftButtomCountWordCloud{
  width: 356px;
  height: 220px;
  float: left;
  margin-top:29px;
  margin-left: 40px;
  background:url(../assets/indexContentLeftButtomCountTeacherCountBg.png); 
}
.indexContentLeftButtomCountWordCloud .titleDiv{
  width: 90px;
  height: 31px;
  background:url(../assets/titleBg.png); 
  margin: 10px;
  text-align: center;
  position: absolute;
}
.indexContentLeftButtomCountWordCloud #wordCloudDiv{
  width: 356px;
  height: 220px;
}
/*.indexContentLeftButtomCountWordCloud .roundDiv{
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: rgba(255,0,255,0.1);

}*/
.index .indexContentLeftButtom .indexContentLeftButtomCount .indexContentLeftButtomCountData{
  width: 356px;
  height: 220px;
  float: left;
  margin-top:29px;
  margin-left: 40px;
  background:url(../assets/indexContentLeftButtomCountTeacherCountBg.png); 
}
.indexContentLeftButtomCountData .titleDiv{
  width: 90px;
  height: 31px;
  background:url(../assets/titleBg.png); 
  margin: 10px;
  text-align: center;
  position: absolute;
}
.index .indexContentRight{
  width: 427px;
  height: 946px;
  float: left;
  background:url(../assets/indexContentRightBg.png);  
}
.indexContentRight .top10Title{
  width: 176px;
  height: 36px;
  background:url(../assets/top10TitleBg.png);
  background-size:cover;
  background-size:contain;
  margin-top: 18px;
  margin-left: 22px;
}
.index .segment {
  border: 1px solid #185761;
  /*padding: 60px 0;*/
  /*text-align: center;*/ 
  /*height: 100%;*/
  margin: 3px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;
  background-color: rgba(0,255,255,0.5);
}

</style>
<!--     timeToFormat:function(times){
      var result = '00:00:00';
      var hour,minute,second
      if (times > 0) {
        hour = Math.floor(times / 3600);
        if (hour < 10) {
          hour = "0"+hour;
        }
        minute = Math.floor((times - 3600 * hour) / 60);
        if (minute < 10) {
          minute = "0"+minute;
        }

        second = Math.floor((times - 3600 * hour - 60 * minute) % 60);
        if (second < 10) {
          second = "0"+second;
        }
        //result = hour+':'+minute+':'+second;
        result = hour+':'+minute;
      }
      return result;  
    }, -->
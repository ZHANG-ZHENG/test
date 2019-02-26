<template>
  <div>
    <div class="studentInfo"> 
      <img :src="pictureUrl" class="roundIcon"  alt="">
      <font class="name">{{name}}</font>
      <img :src="sexUrl2" class="sexIcon" alt="">
      <!-- <img src="../assets/sexMale.png" class="sex_icon" alt=""> -->
      <font class="mark">{{mark}}</font>
    </div>
  </div>
</template>

<script>
export default {
  data () { // 组件内参数定义在data中
    return {
      data1: {}
    };
  },
  //props: ["pictureUrl", "name", "sex", "mark"],
  props: {
    name: String,
    sex: Number,
    mark: Number,
    pictureUrl: String
  },
  // methods: { // 组件的计算方法
  //   sexUrl:function(){
  //     if(this.sex===0){
  //       return "../assets/sexMale.png";
  //     }else{
  //       return "../assets/sexFemale.png";
  //     }
  //   }
  // },
  computed: { 
    sexUrl2: function(){ 
      if(this.sex===0){
        return "./static/sexMale.png";
      }else{
        return "./static/sexFemale.png";
      }
    } 
  }
};
</script>
<style scoped>
.studentInfo{
  width: 282px;
  height: 62px;
  background:url(../assets/studentInfoBg.png);
  background-size:cover;
  background-size:contain;
  margin: 22px auto;
}

.studentInfo .roundIcon{
  width: 50px;
  height: 50px;
  /*display: flex;*/
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top:6px;
  margin-left:6px;
  display:block;
  float:left;
}
.studentInfo .name{
  color:#ffffff;
  width: 80px;
  height: 25px;
  font-size: 18px;
  margin-left:25px;
  margin-top: 22px;
  display:block;
  float:left;
  overflow: hidden;
}
.studentInfo .sexIcon{
  width: 22px;
  height: 22px;
  margin-left:10px;
  margin-top: 24px;
}
.studentInfo .mark{
  color:#DAA63C;
  font-size: 28px;
  margin-left:20px;
  margin-top: 15px;

}
</style>




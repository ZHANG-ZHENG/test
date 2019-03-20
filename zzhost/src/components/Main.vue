<template>
  <div class="mainDiv">
    <el-menu  class="el-menu-demo tac-t" mode="horizontal"><!-- :default-active="activeIndex" -->
      <img id="logoimg" src="../assets/logo-z.jpg" alt="">
      <el-menu-item index="1" style="float:right;"><router-link to="/index">首页</router-link></el-menu-item>
      <el-menu-item index="4" style="float:right;"><a href="http://106.12.122.128/zzhostmgr" target="_blank">后台管理</a></el-menu-item>
      <el-submenu style="float:right;" index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1" disabled>账号</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">其他</template>
          <el-menu-item index="2-4-1" disabled>密码管理</el-menu-item>
        </el-submenu>
      </el-submenu>  
    </el-menu>
    <div class="line"></div>
    
<!--     <div style="height:100%;">
    <el-scrollbar style="height:100%"> -->
    <el-row class="tac">
      <el-col :span="4" class="tac-l">
        <el-menu
          default-active="summary"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#FFFFFF"
          text-color="#fff"
          active-text-color="#ffd04b">

          <el-menu-item index="summary">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/summary">概述</router-link></span>
          </el-menu-item>  
          <el-menu-item index="docker">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/docker">docker</router-link></span>
          </el-menu-item>

          <el-submenu index="java">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="/main/java">java</router-link></span>            
            </template>
            <el-menu-item-group>
              <template slot="title"><router-link to="/main/design-pattern">设计模式</router-link></template>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"><router-link to="/main/java-frame">JAVA框架</router-link></template>
            </el-menu-item-group>            
          </el-submenu>

          <el-submenu index="web">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span><router-link to="/main/web">web</router-link></span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <router-link to="/main/responsive-layout">响应式</router-link>
              </template>
            </el-menu-item-group>             
<!--             <el-menu-item-group>
              <template slot="title">
                html
              </template>
            </el-menu-item-group> -->
            <el-menu-item-group>
              <template slot="title">
                <router-link to="/main/web/vuePage">vue</router-link>
              </template>
            </el-menu-item-group>            
          </el-submenu>

          <el-menu-item index="mysql">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/mysql">mysql</router-link></span>
          </el-menu-item>
          <el-menu-item index="redis">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/redis">redis</router-link></span>
          </el-menu-item>
          <el-menu-item index="memcached">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/memcached">memcached</router-link></span>
          </el-menu-item>          
          <el-menu-item index="mongo">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/mongo">mongo</router-link></span>
          </el-menu-item>
          <el-menu-item index="fastdfs">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/fastdfs">FastDFS</router-link></span>
          </el-menu-item> 
 
          <el-submenu index="rabbitMQ">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="/main/rabbitMQ">rabbitMQ</router-link></span>            
            </template>
            <el-menu-item-group>
              <template slot="title"><router-link to="/main/mq-transaction">事务</router-link></template>
            </el-menu-item-group>            
          </el-submenu>

          <el-submenu index="zookeeper">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="/main/zookeeper">zookeeper</router-link></span>            
            </template>
            <el-menu-item-group>
              <template slot="title"><router-link to="/main/zoo-transaction">事务</router-link></template>
            </el-menu-item-group>            
          </el-submenu>
<!--           <el-menu-item index="zookeeper">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/zookeeper">zookeeper</router-link></span>
          </el-menu-item>  -->                                              
          <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/wechat">wechat</router-link></span>
          </el-menu-item>    
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/android">android</router-link></span>
          </el-menu-item>  
          <el-menu-item index="linux">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/main/linux">linux</router-link></span>
          </el-menu-item>

          <el-submenu index="build">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>持续集成</span>
            </template>
            <el-menu-item-group>
              <template slot="title"><router-link to="/main/nexus">nexus/maven</router-link></template>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"><router-link to="/main/git">git</router-link></template>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"><router-link to="/main/jenkins">jenkins</router-link></template>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="test">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>自动化测试</span>
            </template>
            <el-menu-item-group>
              <template slot="title">jmeter</template>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">selenium checkstyle findbugs</template>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="loadBalance">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>负载均衡</span>
            </template>
            <el-menu-item-group>
              <template slot="title"><router-link to="/main/CDN">CDN</router-link></template>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">nginx</template>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">LVS</template>
            </el-menu-item-group>            
          </el-submenu>

          <el-submenu index="mgr">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>站点管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <a href="http://baidu.com" target="_blank">
                  文本编辑
                </a>
              </template>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="contentSty tac-r">
        <router-view/>
      </el-col>

    </el-row>
<!--     </el-scrollbar>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to zzhost website main'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainDiv {
    height:100%;
    background:url(../assets/bg.jpg);

  }
  .tac-t{
    height:8%;
  }
  .tac{
    height:88%;
  }
  .tac-l,.tac-r{
    height:100%;
    overflow-y:auto;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-submenu__title span{
    color: #000000;
  }

  #logoimg{
    width: 70px;
    height: 70px；
  }
  .contentSty{
    text-align: center;
  }
@media screen and (max-width: 600px) {
  .tac-t{
    height:0%;
    overflow:hidden;
  }
  .tac-l{
    display:none;
  }
  .tac-r{
    width:100%;
  }
}
</style>

<template>
  <div class="jl_dialog" :class="{hide:!value}">
    <div class="UImask" @click="maskHandle"></div>
    <div class="UIdialog">
      <div class="UIdialog_hd"><strong class="UIdialogTitle">{{title}}</strong></div>
      <div class="UIdialog_bd">
        <slot>弹窗内容</slot>
      </div>
      <div class="UIdialog_ft">
        <span v-if="cancel" class="UIdialog_btn UIdialog_btn_default left" @click="onCancel" >{{cancelVal}}</span>
        <span v-if="confirm" class="UIdialog_btn UIdialog_btn_default right " :class={UIdialog_btn_disabled:isDisabled} @click="onConfirm">{{confirmVal}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'jlDialog',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      confirm: {
        type: Boolean,
        default: false
      },
      cancel: {
        type: Boolean,
        default: false
      },
      title: {
        default: null
      },
      confirmVal: {
        type: String,
        default: '是'
      },
      cancelVal: {
        type: String,
        default: '否'
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      maskHide:{
        type: Boolean,
        default:true
      }
    },
    methods: {
      maskHandle(){
          if(this.maskHide){
              console.log(2222)
              this.$emit('input',false)
          }
      },
      onConfirm(){
          if(!this.isDisabled){
              this.$emit('onConfirm')
              this.$emit('input', false)
          }
      },
      onCancel(){
        this.$emit('onCancel')
        this.$emit('input', false)
      }
    }
  }
</script>

<style>
    .UImask{
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .6);
    }
   .UIdialog{
        text-align: left;
       position: fixed;
       z-index: 5000;
       width: 80%;
       max-width: 300px;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       background-color:#FFFFFF;
       text-align: center;
       border-radius: 8px;
       overflow: hidden;
       border: 1px solid #EEEEEE;
   }
    .UIdialog_hd {
      padding: 1.3em 1.6em .5em;
    }
    .UIdialogTitle {
      font-weight: 400;
      font-size: 18px;
    }
    .UIdialog_bd {
      padding: 0 1.6em .8em;
      min-height: 40px;
      font-size: 15px;
      line-height: 1.3;
      word-wrap: break-word;
      word-break: break-all;
      color: #4a4a4a;
      &:first-child{
        padding:2.7em 20px 1.7em;
        color:#353535;
      }
    }
    .UIdialog_ft {
      position: relative;
      line-height: 48px;
      font-size: 18px;
      display: flex;
      border-top:1px solid #D5D5D6 ;
      &:after {
        content: " ";
      }
    }
    .UIdialog_btn {
      display: block;
      flex: 1;
      color: #3CC51F;
      text-decoration: none;
      /*&:active {*/
        /*<!--background-color: #EEEEEE;-->*/
      /*}*/
      position: relative;
      &:first-child {
        border-right: 1px solid #D5D5D6;
        &:after {
          display: none;
        }
      }
    }
    .left {
      color: #353535;
    }
    .right{
      background-color: #2c5fc3;
      color: #FFFFFF;
    }
    .UIdialog_btn_disabled{
      background-color: #d7d7d7;
      color: #a4a4a4;
    }

    .weui-skin_android{
      .UIdialog{
        text-align: left;
        box-shadow: 0 6px 30px 0 rgba(0, 0, 0, .1);
      }
      .UIdialogTitle{
        font-size: 21px;
      }
      .UIdialog_hd{
        text-align: left;
      }
      .UIdialog_bd{
        color:#4a4a4a;
        padding:.25em 1.6em 2em;
        font-size: 17px;
        text-align: left;
        &:first-child{
          padding:1.6em 1.6em 2em;
          color:#353535;
        }
      }
      .UIdialog_ft{
        display: block;
        text-align: right;
        line-height: 42px;
        font-size: 16px;
        padding:0 1.6em .7em;
        &:after{
          display: none;
        }
      }
      .UIdialog_btn{
        display: inline-block;
        vertical-align: top;
        padding:0 .8em;
        &.left{
          color: #3CC51F
        }
        &:after{
          display: none;
        }

        &:active{
          background-color: rgba(0,0,0,.06);
        }
        &:visited{
          background-color: rgba(0,0,0,.06);
        }
        &:last-child{
          margin-right: -.8em;
        }
      }
      .left {
        color: #353535;
      }
      .right{
        background-color: #2c5fc3;
        color: #FFFFFF;
      }
      .UIdialog_btn_disabled{
        background-color: #d7d7d7;
        color: #a4a4a4;
      }
    }

    @media screen and (min-width: 1024px) {
      .UIdialog {
        width: 35%;
      }
    }

</style>
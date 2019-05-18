<template>
  <el-container>
    <el-header class="hheader">
      <div class="foldcon" :class="{folding:iscollapse,unfolding:!iscollapse}">
        <i :class="foldicon" @click="togglefold" style="font-size:30px"></i>
      </div>
      <div class="ttab">
        <el-tabs v-model="tabname" @tab-click="tabaction">
          <el-tab-pane label="tab0" name="tab0"></el-tab-pane>
          <el-tab-pane label="tab1" name="tab1"></el-tab-pane>
          <el-tab-pane label="tab2" name="tab2"></el-tab-pane>
        </el-tabs>
      </div>
    </el-header>
    <el-container class="ccontainer">
      <el-aside class="aaside" width="auto">

        <el-row>
          <el-col>
            <el-menu :class="{menucls:!iscollapse}" @select="selectaction" default-active="0" :collapse="iscollapse">
              <el-menu-item index="0">
                <template>
                  <i class="el-icon-location" ></i>
                  <span>title0</span>
                </template>
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>title1</span>
                </template>
                <el-menu-item index="1-1">
                  <template>
                    <i class="el-icon-location"></i>
                    <span>option1-1</span>
                  </template>
                </el-menu-item>

                <el-submenu index="1-2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>option1-2</span>
                  </template>
                  <el-menu-item index="1-2-1">option1-2-1</el-menu-item>
                  <el-menu-item index="1-2-2">option1-2-2</el-menu-item>
                </el-submenu>

              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>

      </el-aside>
      <el-container direction="vertical">

        <el-breadcrumb class="bbread">
          <el-breadcrumb-item v-for="bread in breadarr" :key="bread">{{ bread }}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-main class="mmain">
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        iscollapse:false,
        foldicon: "el-icon-s-fold",
        tabname: "",
        topath: "0",
      }
    },
    computed: {
      breadarr: function () {
        return this.topath.split("/")
      }
    },
    methods: {
      tabaction: function () {
        console.log(this.tabname);
      },
      selectaction: function (index, indexPath) {

        this.topath = indexPath.join("/");
        console.log(this.topath);
        this.$router.replace({path: "/" + this.topath});

      },
      togglefold:function(){
        this.iscollapse=!this.iscollapse;
        if(this.iscollapse==true){
          this.foldicon = "el-icon-s-unfold";
        }else{
          this.foldicon = "el-icon-s-fold";
        }
      }
    }
  }
</script>

<style lang="less">

  @import url("./css/index.css");

  @headerheight: 60px;
  @asideunfoldw:200px;
  @asidefoldw:65px;

  .ccontainer {
    height: calc(100vh - @headerheight);
  }
  .hheader{
    padding:0;
  }
  .menucls{
    min-width:200px;
  }
  .folding{
    width:@asidefoldw;
  }
  .unfolding{
    width:@asideunfoldw;
  }

  .aside, .main {
    height: 100%;
  }

  .aside {
    background-color: #ccc;
  }

  .main {
    background-color: #eee;
  }

  .bbread {
    margin-left: 20px;
  }

  .ttab {
    height: 100%;
    display: inline-flex;
    margin-left:20px;
  }

  .foldcon {
    height: 100%;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    vertical-align: top;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

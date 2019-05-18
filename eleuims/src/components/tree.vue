<template>
  <el-tree :data="treedata" :props="defaults"></el-tree>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "tree",
      mounted:function(){
        axios.get("../../static/data.json").then((res)=>{
          this.treedata= res.data;
          this.indexit(this.treedata,"");
          console.log(this.treedata);
        })
      },
      data:function(){
        return {
          treedata:[],
          defaults:{
            label:"name",
            children:"children"
          },
        }
      },
      methods:{
        indexit:function(arr,suffix){
          for(let i in arr){
            let currentsuffix=suffix+(Number(i)+1);
            arr[i].name+=currentsuffix;
            if(!!arr[i].children&&arr[i].children.length!=0){
              this.indexit(arr[i].children,currentsuffix+"-")
            }
          }
        }
      }
    }
</script>

<style scoped>

</style>

<template>
  <el-table :data="tabledata" v-loading="loading">
    <el-table-column label="name" prop="name"></el-table-column>
    <el-table-column label="gender" prop="gender"></el-table-column>
    <el-table-column label="date" prop="date"></el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "ttable",
        data:function(){
          return{
            tabledata:[
              {name:"1",gender:"2",date:"3"},{name:"4",gender:"5",date:"6"}
            ],
            loading:true,
          }
        },
        mounted:function(){
          setTimeout(()=>{
            this.loading=false;
          },2000)
        }
    }
</script>

<style scoped>

</style>

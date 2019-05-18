;
<template>
  <div>
    <div class="block">
      <el-checkbox v-model="allmodel" :label="alllabel" :indeterminate="isIndeterminate"
                   @change="changeAll"></el-checkbox>
      <el-checkbox-group v-model="partmodel">
        <el-checkbox v-for="part in partlabels" :label="part" :key="part" @change="changePart"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="block">
      <el-autocomplete :fetch-suggestions="querySearch" v-model="state">
        <i class="el-icon-edit el-input__icon" slot="suffix"></i>
        <template slot-scope="{ item }">
          <span>{{item.value}}</span><span class="addr">{{item.address}}</span>
        </template>
      </el-autocomplete>
    </div>
    <div class="block">
      <el-pagination style="box-shadow:0 2px 12px rgba(0,0,0,0.2)" layout="prev,pager,next" :total="500"
                     @current-change=""></el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pagination",
    data: function () {
      return {
        isIndeterminate: true,
        alllabel: "all",
        partlabels: ["part1", "part2", "part3"],
        allmodel: "",
        partmodel: [],
        suggestions:[ { "value": "1221312", "address": "1231232" },
          { "value": "1231231", "address": "456563" },
          { "value": "453454", "address": "45635" },
          { "value": "45645", "address": "6857587" },],
        state:"",
      }
    },
    methods: {
      changeAll: function (val) {
        console.log(val, this.allmodel);
        this.isIndeterminate = false;
        this.partmodel = val ? this.partlabels : [];
      },
      changePart: function (val) {
        console.log(val, this.partmodel);
        this.allmodel = this.partmodel.length > 0 && this.partmodel.length == this.partlabels.length;
        this.isIndeterminate = this.partmodel.length > 0 && this.partmodel.length < this.partlabels.length;
      },
      querySearch:function(queryString,next){
        let results = queryString?this.suggestions.filter(this.createFilter(queryString)):this.suggestions;
        next(results);
      },
      createFilter:function(word){
        return (sug)=>{
          let reg = new RegExp(word,"g");
          return reg.test(sug.value)||reg.test(sug.address);
        }
      }
    }
  }
</script>

<style scoped>
  .block{
    margin:20px 0;
  }
  .addr{
    color:#ccc;
  }
</style>

<script>
import {db} from "./db"

export default{
  data(){
    return{
      data:db,
    }
  },
  mounted(){
    console.log(this.db)
  }
}
</script>

<template>
  <div class="text">{{data}}</div>
</template>

<style scoped>

</style>

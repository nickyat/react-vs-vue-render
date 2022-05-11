<template>
  <div>
    <div v-for="r in oo()" :key="r.id">
      <p>Row #{{r.id}}: {{r.val}}</p>
      <span>Row #{{r.id}}: {{r.val}}</span>
    </div>
  </div>
</template>

<script>
let r=[]
for (let i=0;i<5000;i++){r.push({id:i,val:i})}
//console.log(r)
export default {
  name: 'Test',
  data(){
    return {
      row:r,
    }
  },
  methods:{
    oo(){  return Object.freeze(r)}
  }

}
</script>

<style scoped>

</style>

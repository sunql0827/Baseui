<template>
  <div class="page">
     <menubar></menubar>
  </div>
</template>

<script>
	import menubar from './element/Menubar.vue'
export default {
  name: 'page',
	components:{
		menubar
	},
  props: {
    msg: String
  },created() {
  	
  },methods:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

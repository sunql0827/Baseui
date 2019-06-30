<template>
  <div class="page">
		<div class="nav-title sp-18 text-white">背景颜色</div>
     <div class="grids">
     		<div class="grids-item bg-black text-white">bg-black</div>
     		<div class="grids-item bg-blue">bg-blue</div>
     		<div class="grids-item bg-brown">bg-brown</div>
     		<div class="grids-item bg-cyan">bg-cyan</div>
     		<div class="grids-item bg-green">bg-green</div>
     		<div class="grids-item bg-grey">bg-grey</div>
     		<div class="grids-item bg-mauve">bg-mauve</div>
				<div class="grids-item bg-olive">bg-olive</div>
				<div class="grids-item bg-orange">bg-orange</div>
				<div class="grids-item bg-pink">bg-pink</div>
				<div class="grids-item bg-purple">bg-purple</div>
				<div class="grids-item bg-red">bg-red</div>
				<div class="grids-item bg-white text-black">bg-white</div>
				<div class="grids-item bg-yellow">bg-yellow</div>
     </div>
  </div>
</template>

<script>
	
export default {
  name: 'page',
	components:{
		
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
.grids{
	width: 100%;
	display: inline-block;
	position: relative;
	text-align: center;
	padding: 2px;
}
.grids-item{
	border:solid 1px #EDEDED;
	width: 32%;
	float: left;
	height: 50px;
	line-height: 50px;
	text-align: center;
	margin: 0.1%;
	border-radius: 8px;
}
</style>

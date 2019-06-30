<template>
  <div class="page">
		<div class="nav-title sp-18 text-white">文字颜色</div>
     <div class="grids">
     		<div class="grids-item text-black">text-black</div>
     		<div class="grids-item text-blue">text-blue</div>
     		<div class="grids-item text-brown">text-brown</div>
     		<div class="grids-item text-cyan">text-cyan</div>
     		<div class="grids-item text-green">text-green</div>
     		<div class="grids-item text-grey">text-grey</div>
     		<div class="grids-item text-mauve">text-mauve</div>
				<div class="grids-item text-olive">text-olive</div>
				<div class="grids-item text-orange">text-orange</div>
				<div class="grids-item text-pink">text-pink</div>
				<div class="grids-item text-purple">text-purple</div>
				<div class="grids-item text-red">text-red</div>
				<div class="grids-item text-white">text-white</div>
				<div class="grids-item text-yellow">text-yellow</div>
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
	background-color: #EDEDED;
	border-radius: 8px;
}
</style>

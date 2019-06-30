<template>
	<div class="page">
		<div class="nav-title sp-18 text-white">文字大小</div>
		<div class="contents">
			<p class="sp-36">文字36</p>
			<p class="sp-32">文字32</p>
			<p class="sp-30">文字30</p>
			<p class="sp-28">文字28</p>
			<p class="sp-26">文字26</p>
			<p class="sp-24">文字24</p>
			<p class="sp-18">文字18</p>
			<p class="sp-16">文字16</p>
			<p class="sp-14">文字14</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'page',
		components: {

		},
		props: {
			msg: String
		},
		created() {

		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	

	p {
		margin: 0;
		line-height: 40px;

	}

	.contents {
		padding: 10px;
	}
</style>

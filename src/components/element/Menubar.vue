<template>
	<div>
		<div class="bu-list-horizontal">
			<div class="list-item">
				<img class="list-item-img" src="../../assets/logo.png"/>
				<p class="list-item-text">公有</p>
			</div>
			<div class="list-item">
				<img class="list-item-img" src="../../assets/logo.png"/>
				<p class="list-item-text">独立</p>
			</div>
			<div class="list-item">
				<img class="list-item-img" src="../../assets/logo.png"/>
				<p class="list-item-text">复合</p>
			</div>
			<div class="list-item">
				<img class="list-item-img" src="../../assets/logo.png"/>
				<p class="list-item-text">套件</p>
			</div>
			<div class="list-item">
				<img class="list-item-img" src="../../assets/logo.png"/>
				<p class="list-item-text">关于</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.bu-list-horizontal{
		width: 100%;
		height: 60px;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}
	.list-item{
		width: 25%;
		height: 100%;
		text-align: center;
		padding: 5px;
		border: 1px solid #EDEDED;
	}
	.list-item-img{
		width: 30px;
		height: 30upx;
		border-radius: 50%;
	}
	.list-item-text{
		text-align: center;
		font-size: 16px;
		margin: 0;
	}
</style>

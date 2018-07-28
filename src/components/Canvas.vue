<template>
	<div class="canvas">
		<Pixel v-for="p in 30*30" :key="p" :color="color" />
	</div>
</template>


<script>
import Pixel from './Pixel';

export default {
	components: {
		Pixel,
	},
	props: {
		color: String,
	},
}
</script>

<style lang="scss">
.canvas {
	display: flex;
	flex-wrap: wrap;
	max-width: 60rem;
}
</style>


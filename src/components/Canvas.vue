<template>
	<div class="canvas">
		<Pixel isInCanvas v-for="(color, index) in pixels" :key="index" :color="color" :index="index" />
	</div>
</template>


<script>
import Pixel from './Pixel';

export default {
	components: {
		Pixel,
	},
	props: {
		pixels: Array,
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


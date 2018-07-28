<template>
	<div>
		<Pixel color="white" :current="checkCurrent('white')" />
		<Pixel color="lightblue" :current="checkCurrent('lightblue')" />
		<Pixel color="blue" :current="checkCurrent('blue')" />
		<Pixel color="darkblue" :current="checkCurrent('darkblue')" />
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
	methods: {
		checkCurrent(color) {
			return color == this.color;
		}
	}
}
</script>

<template>
	<div>
		<Pixel interactive color="white" :current="checkCurrent('white')" />
		<Pixel interactive color="lightblue" :current="checkCurrent('lightblue')" />
		<Pixel interactive color="blue" :current="checkCurrent('blue')" />
		<Pixel interactive color="darkblue" :current="checkCurrent('darkblue')" />
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
			return color == this.color ? true : false;
		}
	}
}
</script>

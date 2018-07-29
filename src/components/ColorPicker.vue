<template>
	<div>
		<Pixel isInColorPicker color="white" :current="checkCurrent('white')" />
		<Pixel isInColorPicker color="lightblue" :current="checkCurrent('lightblue')" />
		<Pixel isInColorPicker color="blue" :current="checkCurrent('blue')" />
		<Pixel isInColorPicker color="darkblue" :current="checkCurrent('darkblue')" />
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

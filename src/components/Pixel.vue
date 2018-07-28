<template>
	<div @click="interactive && changeColor(color)" :class="['pixel', color, isCurrent]"></div>
</template>

<script>
export default {
	name: 'Pixel',
	props: {
		color: String,
		current: Boolean,
		interactive: Boolean,
	},
	computed: {
		isCurrent() {
			return this.current ? 'current' : '';
		}
	},
	methods: {
		changeColor(color) {
			this.$root.$emit('updateColor', color)
		},
	},
}
</script>

<style lang="scss" scoped>
.pixel {
	border: 1px solid lightgray;
	width: 2rem;
	height: 2rem;

	&.current {
		border: 4px solid yellow;
	}
}

.white {
	background-color: white;
}
.lightblue {
	background-color: rgb(0, 188, 212);
}
.blue {
	background-color: rgb(3, 169, 244);
}
.darkblue {
	background-color: rgb(33, 150, 243);
}
</style>

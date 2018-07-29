<template>
	<div id="app">
		<ColorPicker :color="color" />
		<Canvas :pixels="pixels" />
	</div>
</template>

<script>
import Canvas from "./components/Canvas.vue";
import ColorPicker from './components/ColorPicker'

const defaultColor = 'white';

export default {
  name: "app",
  components: {
	 Canvas,
	 ColorPicker,
  },
  data() {
	  return {
		  color: defaultColor,
		  pixels: Array(30 * 30).fill().map((() => defaultColor))
	  }
  },
  mounted() {
	  this.$root.$on('updateColor', this.updateColor);
	  this.$root.$on('clickedPixel', this.clickedPixel);
  },
  methods: {
	  updateColor(color) {
		  this.color = color;
	  },
	  clickedPixel(index) {
			//   Vue.set(this.pixels, index, this.color)
			this.pixels.splice(index, 1, this.color)
	  }
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
	box-sizing: border-box;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #2c3e50;
	background-color: #333;
	height: 100vh;
	margin-top: 60px;
}
</style>

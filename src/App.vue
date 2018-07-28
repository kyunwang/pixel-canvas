<template>
	<div id="app">
		<ColorPicker :color="color" />
		<Canvas :color="color" />
	</div>
</template>

<script>
import Canvas from "./components/Canvas.vue";
import ColorPicker from './components/ColorPicker'

export default {
  name: "app",
  components: {
	 Canvas,
	 ColorPicker,
  },
  data() {
	  return {
		  color: 'white'
	  }
  },
  mounted() {
	  this.$root.$on('updateColor', this.updateColor);
  },
  methods: {
	  updateColor(color) {
		  this.color = color;
	  },
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

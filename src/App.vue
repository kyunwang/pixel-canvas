<template>
	<div id="app">
		<ColorPicker :color="color" />
		<Canvas />
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
  }
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
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

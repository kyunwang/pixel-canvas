<template>
	<div id="app">
		<Pixel msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import Pixel from "./components/Pixel.vue";

export default {
  name: "app",
  components: {
    Pixel
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

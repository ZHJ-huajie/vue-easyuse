<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
  	return{
  		
  	}
  },
  mounted (){
  	this.$ajax("https://www.easy-mock.com/mock/59f29557da332d0d906ae2ed/example/userdata")
  	.then((res) => {
  		console.log(res)
  	})
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

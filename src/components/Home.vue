<template>
  <div class="home">
     <h2>{{details.name}}</h2>
    <div class="left">
    </div>
    <div class="right">
      <div class="icons">
        <a :href="details.social_media.instagram"><font-awesome-icon :icon="['fab', 'instagram-square']" size="3x" class="icon"/></a>
        <a :href="details.social_media.twitter"><font-awesome-icon :icon="['fab', 'twitter-square']" size="3x" class="icon"/></a>
        <a :href="details.social_media.snapchat"><font-awesome-icon :icon="['fab', 'snapchat-square']" size="3x" class="icon"/></a>
        <a :href="details.social_media.email"><font-awesome-icon icon="envelope-square" size="3x" class="icon"/></a>
      </div>
    </div>
    <div class="center">
      <img src="../assets/orange-woman.jpg" alt="An image of a woman" class="orange">
    </div>
    <ul>
      <li>HOME</li>
      <li>ABOUT</li>
      <li><img src="../assets/li.jpg" alt="An image of a woman" class="li"></li>
      <li>GALLERY</li>
      <li>CONTACT</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      details: [],
      errors: []
    }
  },

  created() {
    axios.get(`https://hirng-x2021.glitch.me/api`)
    .then(response => {
      console.log(response.data)
      this.details = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.left{
  background: #AE294E;
  width: 50%;
  height: 100vh;
}
.right{
  background: #BC3A64;
  width: 50%;
  height: 100vh;
  margin: -55.4% 0 0 50%;
}
.center{
  background: #BC3A64;
  width: 40%;
  height: 70vh;
  margin: -45% 0 0 30%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}
ul{
  list-style-type: none;
  display: flex;
  margin-left: 10%;
}
li{
  color: #ffffff;
  margin-left: 10.5%;
}
h2{
  color: #ffffff;
  position: absolute;
  margin: 4% 0 0 37.5%;
  letter-spacing: .5em;
}
.li{
  height: 8vh;
  width: 5vw;
  border-radius: 50%;
  border: none;
}
.icons{
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 20% 0 0 42%;
}
.icon{
  color: #ffffff;
  padding: .5em;
}
.orange{
   width: 100%;
   height: 60vh;
   margin-top: 7%;
}
</style>

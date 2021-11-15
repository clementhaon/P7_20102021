<template>
  <div>
    <div id="navlogo">
      <a href="/"> <img id="logo" src="./assets/logo.png" alt="logo"/></a>
    </div>
    <nav id="nav">
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/profile"> Profil</router-link></li>
        <li>
          <a to="/" v-on:click="Logout()">
            <span class="logout">Se déconnecter</span></a
          >
        </li>
      </ul>
    </nav>
    <router-view />
    <div class="space"></div>
    <div class="footer">
        <nav>
            <ul>
                <li><router-link to="/twitter"><i class="fab fa-twitter-square"></i></router-link></li>
                <li><router-link to="/facebook"><i class="fab fa-facebook-square"></i></router-link></li>
                <li><router-link to="/instagram"><i class="fab fa-instagram"></i></router-link></li>
                <li><router-link to="/pinterest"><i class="fab fa-pinterest-square"></i></router-link></li>
            </ul>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Logout() {
      localStorage.clear();
      this.$router.replace("/login");
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  padding:0;
  height:100%;
  background: linear-gradient(#EAF8FD, #EBFFFA);
}
button {
    font-family: 'Montserrat', sans-serif;
}
a {
    color: black;
    text-decoration: underline grey;
  }
nav ul li:hover {
  transform: scale(1.2);
}
#logo {
  width: 400px;
  max-width: 90%;
}
#navlogo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #44bb84;
  height: 100px;
  opacity: 0.7;   

}
#nav {
  background-color: #ECEDED;
  height: 100%;
  opacity: 0.9;   
}
#nav ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin : 0;
  padding: 20px 0 20px 0;
  font-weight: bold;
  color: black;
}
li {
  list-style-type: none;
  transition: all .3s ease-in-out;

}
.logout {
  cursor: pointer
}
.space {
  height: 80px;
}
.footer {
  background-color: #44bb84;
  width:100%;
  opacity: 0.7;
  position: fixed;
  bottom: 0;
}
.footer nav {
  height: 50px;
}
.footer ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    height: 100%;
}
.footer li {
  font-size: 1.5rem;
  opacity: 0.8;
}
.padding {
  padding: 0 100px 0 100px;
  margin-bottom : 30px;
}
@media screen and (max-width: 700px){
  .padding {
    padding: 10px;
  }
}
.bold {
  font-weight: bold;
}
.shadow {
  box-shadow: 0 0 20px 1px grey;
}
button {
  border-radius:5px;
  border: 1px solid grey;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  animation: shake 0.42s ease-in;
  transform: translate3d(0, 0, 0);
  perspective: 100px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }
  
  30%, 50%, 70% {
    transform: translate3d(-1px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(1px, 0, 0);
}
}
input {
  border-radius: 10px;
  border: 2px solid grey;
  min-height : 30px;
}
.login--form {
  display: flex;
  align-items: baseline;
}
.label--email {
  display: block;
  float: left;
  width: 113px;
}
</style>
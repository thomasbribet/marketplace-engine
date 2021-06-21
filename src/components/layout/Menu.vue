<template>
  <div class="menu">
    <h3>SOMEMARK</h3>
    <div class="logo">
      <router-link to="/adminhome">
      <img src="../../assets/userLogo.png" alt="LogoUser"/>
      </router-link>
      <router-link to="/">
      <img src="../../assets/homeLogo.png" alt="LogoHome"/>
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style>
.menu {
  background-color: var(--bluePrimary);
  display: flex;
  justify-content: space-between;
  height: 5vh;
}
.logo {
  display: flex;
  justify-content: space-evenly;
  background-color: var(--bluePrimary);
}
h3 {
  background-color: transparent;
  opacity: 0.41;
  font-weight: 400;
  padding: 0.5vh;
}
img {
  width: 30px;
  height: 30px;
  margin-right: 1vh;
  background-color: transparent;
}
a {
  background-color: transparent;
}
</style>

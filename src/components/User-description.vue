<template>
  <div class="userDescriptionPage">
    <header>
      <img class="imgMain" src="../assets/maltLogo.jpeg" alt="logoCard" />
    </header>
    <div class="containerMain">
      <article class="container1 radius">
        <div class="imgScreen radius">
          <img class="screen" src="../assets/maltLogo.jpeg" alt="screen1" />

          <img class="screen" src="../assets/maltLogo.jpeg" alt="screen2" />
        </div>
        <div class="sommary radius">
          <h4>Brève description de la marketplace :</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            incidunt voluptatum non alias reiciendis. Consequuntur commodi
            ducimus velit animi libero eos, rem, provident atque nam hic aliquid
          </p>
        </div>
      </article>
      <aside class="container2 radius">
        <div>
          <h4>Chiffre clé :</h4>
          <p>
            - Année de création :
            <br />
            <br />
            - Localisation :
            <br />
            <br />
            - Levée de fond :
            <br />
            <br />
            - Categories :
          </p>
        </div>
        <button class="radius">Voir le site !</button>
      </aside>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.userDescriptionPage {
  background-color: var(--bgColor);
  height: 95vh;
}
.imgMain {
  width: 100%;
  height: 40vh;
  margin: 0;
  padding: 0;
}
.containerMain {
  display: flex;
  flex-wrap: wrap;
  background-color: var(--bgColor);
}

.container1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 60%;
  height: 48vh;
  margin: 2%;
  box-shadow: var(--boxShadow);
  background-color: var(--whiteCard);
}
.imgScreen {
  background-color: var(--whiteCard);
  display: flex;
  justify-content: center;
  align-items: center;
}
.screen {
  width: 45%;
  height: 15vh;
  background-color: var(--whiteCard);
  border-radius: 10px;
}
.sommary {
  width: 100%;
  padding: 2%;
}
h4 {
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;
}

.container2 {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 32%;
  height: 48vh;
  margin: 2%;
  padding: 1%;
  box-shadow: var(--boxShadow);
  background-color: var(--whiteCard);
}
p {
  padding-top: 2%;
}
button {
  margin: auto;
  width: 40%;
  padding: 2%;
  background-color: var(--button);
  color: black;
  font-size: 1rem;
  border-color: var(--button);
}
@media (max-width: 767px) {
  .userDescriptionPage {
    display: flex;
    flex-direction: column;
    height: 125vh;
  }
  .imgMain {
    height: 15vh;
    width: 100%;
  }
  .containerMain {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 80vh;
  }
  .container1 {
    width: 95%;
    height: 50%;
    background-color: transparent;
    box-shadow: none;
    margin: 0;
  }
  .sommary {
    width: 100%;
    padding: 2%;
    background-color: var(--whiteCard);
    box-shadow: var(--boxShadow);
    margin-top: 2%;
  }
  .container2 {
    width: 95%;
    height: 45%;
    margin: 0;
  }
  .imgScreen {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }
  .screen {
    width: 100%;
    margin-left: 0;
    margin-top: 4%;
    margin-bottom: 2%;
  }
  p {
    padding: 5px;
  }
}
</style>

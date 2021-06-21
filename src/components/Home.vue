<template>
  <div>
    <main class="home">
      <h1 id="title">
        <img src="../assets/projecteur.png" alt="projecteur" />Search
        Marketplace
      </h1>
      <h2 id="littleTitle">Trouvez votre marketplace en un clic</h2>
      <div class="search">
        <input
          class="radius searchWord"
          type="search"
          name=""
          placeholder="Cherchez une marketplace"
        />
        <select
          id="pet-select"
          class="radius searchCategory"
          type="select"
          name=""
        >
          <option value="">--Categories--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
    </main>
    <Cards />
    <aside>
      <div id="referencement">
        <button class="radius btnReferencement">
          Ajoutez votre marketplace
        </button>
      </div>
    </aside>
    <article class="contentFormulaire">
      <div class="formulaire radiusCard">
        <h1 class="titleForm">Etre au courant des nouvelles MarketPlace</h1>
        <input
          class="inputForm radius"
          placeholder="votre email pour une Newletter"
          type="email"
        />
        <button type="submit" class="btnForm radius">Envoyer</button>
      </div>
    </article>
    <footer>Copyright SOMEMARK</footer>
  </div>
</template>

<script>
import Cards from './layout/Cards.vue'
export default {
  components: { Cards },
}
</script>

<style scoped>
/* title */
main {
  width: 100%;
  height: 50vh;
  background: var(--bluePrimary);
}
img {
  width: 5rem;
  height: 3rem;
  z-index: 5;
  transform: rotateY(180deg);
  opacity: 0.33;
}
#title {
  display: flex;
  justify-content: center;
  font-size: 6rem;
  color: white;
  padding-top: 4%;
  background: var(--bluePrimary);
}
#littleTitle {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: white;
  padding-top: 30px;
  background: var(--bluePrimary);
}
/* barre de recherche */
.search {
  display: flex;
  position: relative;
  margin-top: 8%;
  justify-content: center;
  height: 10vh;
  background-color: transparent;
}
input {
  padding: 30px;
  background-color: white;
  border: solid 1px var(--bluePrimary);
}
.searchWord {
  width: 40%;
}
.searchCategory {
  width: 20%;
  padding: 30px;
  background-color: white;
  border: solid 1px var(--bluePrimary);
}

/* bouton aside */
aside {
  display: flex;
  justify-content: flex-end;
  margin: 5%;
}
button {
  padding: 2%;
  background-color: var(--bluePrimary);
  color: white;
  font-size: 1rem;
  border-color: var(--bluePrimary);
}
/* formulaire */
.contentFormulaire {
  display: flex;
  justify-content: center;
}
.formulaire {
  width: 40%;
  height: 35vh;
  background-color: var(--bluePrimary);
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5%;
}
.inputForm {
  width: 80%;
  height: 3vh;
  margin: auto;
}
.btnForm {
  margin: auto;
  width: 20%;
  color: black;
  background-color: var(--button);
}
.btnReferencement {
  width: 100%;
  color: black;
  background-color: var(--button);
  border: solid 1px var(--button);
}
.titleForm {
  background-color: transparent;
  margin: 2%;
  color: white;
  letter-spacing: 0.3rem;
  line-height: 1.6;
}
@media screen and (max-width: 768px) {
  /* title */
  #title {
    font-size: 2rem;
    text-align: center;
  }
  #littleTitle {
    font-size: 1.3rem;
    text-align: center;
  }
  main {
    width: 100%;
    height: 50%;
    background: var(--bluePrimary);
    margin-bottom: 5vh;
  }
  img {
    display: none;
  }
  /* barre de recherche */
  .search {
    height: 3vh;
  }
  .searchWord {
    width: 50%;
    height: 0.5vh;
    padding: 25px;
  }
  .searchCategory {
    width: 30%;
    height: 0.5vh;
    padding: 25px;
  }
  #referencement {
    display: none;
  }
  .formulaire {
    width: 90%;
    height: 35vh;
    background-color: var(--bluePrimary);
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 5%;
  }
  button {
    padding: 1%;
  }
}
</style>

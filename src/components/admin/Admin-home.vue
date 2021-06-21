<template>
  <div>
    <div class="admin">
      <header class="gestionAdmin">
        <router-link to="/admincreatecard">
          <img src="../../assets/plus.png" class="icons plus" alt="bouton plus"/>
        </router-link>
        <img src="../../assets/moins.png" class="icons moins" alt="bouton moins" />
        <input
          class="rechercheAdmin radius"
          type="text"
          placeholder="recherche"
        />
        <select
          id="pet-select"
          class="radius optionCategory"
          type="select"
          name=""
        >
          <option value="">categories</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </header>
    </div>
    <Cards />
  </div>
</template>

<script>
import Cards from '../layout/Cards.vue'
export default {
  components: { Cards },
}
</script>
<style scoped>
.admin {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 10px;
  background-color: transparent;
}
.gestionAdmin {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 15vh;
}
.icons {
  width: 80px;
  height: 80px;
  margin-left: 10px;
}
.rechercheAdmin {
  width: 200px;
  height: 80px;
  padding: 30px;
  background-color: white;
  border: solid 1px var(--bluePrimary);
  margin-left: 10px;
}
.optionCategory {
  width: 100px;
  height: 80px;
  background-color: white;
  border: solid 1px var(--bluePrimary);
  margin-left: 10px;
}
.cards {
  margin-bottom: 1%;
}
@media screen and (max-width: 768px) {
  .icons {
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }
  .rechercheAdmin {
    width: 150px;
    height: 40px;
    padding: 10px;
  }
  .optionCategory {
    width: 100px;
    height: 40px;
  }
}
</style>

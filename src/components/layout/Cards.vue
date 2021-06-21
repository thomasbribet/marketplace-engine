<template>
    <div class="cards">
      <div class="card" v-for="attributCarte in carte" :key="attributCarte">
        <img src="" alt="" />
        <h4>{{ attributCarte }}</h4>
      </div>
    </div>
</template>

<script>
import cardResume from '../admin/Admin-create-card.vue'

export default {
  data() {
    return {
      carte: cardResume,
    }
  },
}
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 2%;
}
.card {
  margin-top: 8%;
  width: 371px;
  height: 238px;
  border-radius: 15px;
  box-shadow: 2px 3px 10px 0px rgba(0, 0, 0, 0.4);
  background-color: var(--whiteCard);
  overflow: visible;
}
</style>

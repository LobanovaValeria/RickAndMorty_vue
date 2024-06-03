<template>
  <div class="cards">
    <character-item v-for="character in characters" :character="character" :key="character.id" />
  </div>
</template>
<script>
import CharacterItem from '@/components/CharacterItem';
export default {
  components: {
    CharacterItem,
  },
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
.cards {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  flex-wrap: wrap;
  height: 50vh;
  overflow: scroll;
  padding-bottom: 7rem;
}
</style>

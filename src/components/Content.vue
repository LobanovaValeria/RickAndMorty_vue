<template>
  <section class="content">
    <search-form @queryParameters="nameAndStatus" />
    <loading v-if="isLoading" />
    <div v-else>
      <characters-list v-if="characters.length > 0" :characters="characters" />
      <h3 v-else>Not found</h3>
    </div>
  </section>
</template>

<script>
import CharactersList from '@/components/CharactersList';
import SearchForm from '@/components/SearchForm';
import Loading from '@/components/Loading';
export default {
  components: {
    CharactersList,
    SearchForm,
    Loading,
  },
  props: {
    characters: {
      type: Array,
      required: true,
    },
    isLoading: Boolean,
  },
  methods: {
    nameAndStatus(nameCharacter, status) {
      this.$emit('queryParameters', nameCharacter, status);
    },
  },
};
</script>

<style>
.content {
  min-height: 80vh;
  background-color: rgb(39, 43, 51);
  padding-top: 3rem;
}
.content__wrapper {
}
</style>

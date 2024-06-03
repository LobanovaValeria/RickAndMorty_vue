<template>
  <form @submit.prevent>
    <h2>Search</h2>
    <input
      :value="nameCharacter"
      @input="nameCharacter = $event.target.value"
      type="text"
      placeholder="Name"
      id="inputName"
    />
    <select v-model="selectOption">
      <option disabled value="">Select Status</option>
      <option v-for="option in options" :value="option.value">{{ option.label }}</option>
    </select>
    <button @click="nameAndStatus">Применить</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      nameCharacter: '',
      selectOption: '',
      options: [
        { value: '', label: 'Status not selected' },
        { value: 'alive', label: 'Alive' },
        { value: 'dead', label: 'Dead' },
        { value: 'unknown', label: 'Unknown' },
      ],
    };
  },
  methods: {
    nameAndStatus() {
      this.$emit('queryParameters', this.nameCharacter, this.selectOption);
      console.log(this.nameCharacter, this.selectOption);
    },
  },
};
</script>
<style>
form {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>

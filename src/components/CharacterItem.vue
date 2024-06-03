<template>
  <article class="card">
    <div class="card__image">
      <img :src="character.image" alt="Злой Морти" />
    </div>
    <div class="card__about">
      <div class="card__about-name">
        <h2>{{ character.name }}</h2>
        <span>
          <span>{{ character.status }} - {{ character.species }}</span>
        </span>
      </div>
      <div class="section">
        <p>Последнее известное местоположение:</p>
        <span>{{ character.location.name }}</span>
      </div>
      <div class="section">
        <p>Впервые замечен в:</p>
        <span>{{ character.origin.name }}</span>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    character: {
      type: Object,
    },
  },
};
</script>
<style>
article {
  width: 600px;
  height: 220px;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgb(60, 62, 68);
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.card__image {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0%;
}
.card__image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.card__about {
  flex-grow: 3;
  flex-shrink: 1;
  flex-basis: 0%;
  position: relative;
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.section > p {
  color: rgb(158, 158, 158);
  padding-bottom: 5px;
}
.section > span {
  font-size: 1.2rem;
}
</style>

<script setup lang="ts">
import type { TechSkillsData } from "../types/contentdata"
defineProps<{ data: TechSkillsData }>()
</script>

<template>
  <section class="section">
    <h2 class="section-title">{{ data.title }}</h2>
    <p class="section-desc">{{ data.description }}</p>

    <div class="categories">
      <div
        v-for="cat in data.details"
        :key="cat.name"
      >
        <h3 class="cat-title">{{ cat.name }}</h3>

        <div class="skills">
          <div
            v-for="skill in cat.skills"
            :key="skill.ski"
            class="skill"
          >
            <img :src="skill.logo" />
            <span>{{ skill.ski }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.cat-title {
  font-family: var(--font-poppins);
  font-size: var(--text-xl);
  margin-bottom: 2rem;
}

.skills {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}

@media  (max-width: 768px) {
  .skills {
    grid-template-columns: 1fr 1fr;
  }
  
}
@media  (max-width: 425px) {
  .skills {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.skill {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.5rem;
  border: 3px solid var(--color-grey);
  border-radius: 0.8rem;
}

.skill img {
  width: 32px;
  height: 32px;
}
span{
  font-size: var(--text-base);
  font-family: var(--font-inter);
  color: var(--color-white);
  font-weight: var(--font-bold);
  background-color: var(--color-vintage);
  padding: 0.5rem .8rem;
  border-radius: 1.5rem;
}
</style>

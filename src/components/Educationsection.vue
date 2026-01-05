<script setup lang="ts">
import type { EducationData } from "../types/contentdata"
defineProps<{ data: EducationData }>()
</script>

<template>
  <section class="section">
    <h2 class="section-title">{{ data.title }}</h2>
    <p class="section-desc">{{ data.description }}</p>

    <div class="edu-list">
      <div
        v-for="edu in data.details"
        :key="edu.school"
        class="card"
      >
        <h3>{{ edu.school }}</h3>
        <p>{{ edu.level }}</p>
        <span>{{ edu.duration }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu-list {
  display: grid;
}

h3{
  font-size: var(--text-xl);
  font-family: var(--font-poppins);
  font-weight: var(--font-bold);
}

p {
  font-size: var(--text-base);
  font-family: var(--font-inter);
}


span {
  font-size: var(--text-lg);
  font-family: var(--font-inter);
  color: var(--color-vintage);
  font-weight: var(--font-bold);
  background-color: var(--color-black);
  padding: 0.5rem .8rem;
  border-radius: 1.5rem;
}
</style>

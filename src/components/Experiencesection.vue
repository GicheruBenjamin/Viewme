<script setup lang="ts">
import type { ExperienceData } from "../types/contentdata"
defineProps<{ data: ExperienceData }>()
</script>

<template>
  <section class="section">
    <h2 class="section-title">{{ data.title }}</h2>
    <p class="section-desc">{{ data.description }}</p>

    <div
      v-for="exp in data.details"
      :key="exp.name"
      class="card"
    >
      <h3>{{ exp.name }}</h3>
      <p class="role">{{ exp.title }}</p>

      <ul>
        <li v-for="r in exp.responsibilities" :key="r">
          {{ r }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
h3 {
  font-family: var(--font-poppins);
  font-size: var(--text-lg);
}

.role {
  color: var(--color-vintage);
  margin-bottom: 2rem;
}

ul {
  margin-left: 2rem;
  display: grid;
  gap: 1rem;
}
</style>

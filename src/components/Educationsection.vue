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
  gap: 3rem;
}

h3 {
  font-family: var(--font-poppins);
  font-size: var(--text-lg);
}

span {
  font-size: var(--text-sm);
  color: var(--color-grey);
}
</style>

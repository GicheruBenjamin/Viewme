<script setup lang="ts">
import type { HeroData } from "../types/contentdata"

defineProps<{ data: HeroData }>()
</script>

<template>
  <section class="section hero">
    <h1 class="hero-title">
      {{ data.title }}
    </h1>

    <p class="hero-desc">
      {{ data.description }}
    </p>

    <div class="hero-meta">
      <span
        v-for="item in data.details"
        :key="item.name"
      >
        {{ item.title }}
      </span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title {
  font-family: var(--font-poppins);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: var(--font-extrabold);
}

.hero-desc {
  margin-top: 2rem;
  max-width: 70rem;
  font-size: var(--text-lg);
  color: var(--color-grey);
}

.hero-meta {
  margin-top: 3rem;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
}
</style>

<script setup lang="ts">
import type { HeroData } from "../types/contentdata"

defineProps<{ data: HeroData }>()
</script>

<template>
  <section class="section hero">
    <h1 class="hero-title">
      {{ data.title }}
    </h1>


    <h2 class="section-desc">
      {{ data.description }}
    </h2>

    <div class="hero-img">
      <img :src="data.imgsrc" alt="hero-img">
    </div>
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

image{
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 2;
}
.hero-title {
  font-family: var(--font-poppins);
  font-size: var(--text-hero);
  font-weight: var(--font-extrabold);
}

.hero-desc {
  font-size: var(--text-xl);
  font-family: var(--font-inter);
  color: var(--color-grey);
  margin-top: 1rem;

}

.hero-meta {
  margin-top: 3rem;
  font-size: var(--text-base);
  font-family: 'Courier New', Courier, monospace;
  font-weight: var(--font-medium);
  color: var(--color-vintage);
  background: var(--color-black);
  width: max-content;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>

<script setup lang="ts">
import type { ContactData } from "../types/contentdata"
defineProps<{ data: ContactData }>()
</script>

<template>
  <section class="section">
    <h2 class="section-title">{{ data.title }}</h2>
    <p class="section-desc">{{ data.description }}</p>

    <div class="contacts">
      <div
        v-for="c in data.details"
        :key="c.name"
        class="contact"
      >
        <strong>{{ c.name }}</strong>
        <a
          v-if="c.info.startsWith('http')"
          :href="c.info"
          target="_blank"
        >
          {{ c.info }}
        </a>
        <span v-else>{{ c.info }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts {
  display: grid;
  gap: 2rem;
}

a {
  color: var(--color-orange);
  text-decoration: none;
}
</style>

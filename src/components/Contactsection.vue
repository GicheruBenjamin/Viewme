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
        <strong>{{ c.name }}</strong> ;
        <span>{{ c.info }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts {
  display: grid;
  gap: 2rem;
}
.contact {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .contact{
    flex-direction: column;
  }
}
strong{
  font-size: var(--text-base);
  font-family: var(--font-poppins);
  color: var(--color-black);
  font-weight: var(--font-bold);
  margin-right: .2rem;
}

span{
  font-size: var(--text-sm);
  font-family: var(--font-inter);
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 0.5rem .8rem;
  border-radius: 1.5rem;
}
@media  screen and (max-width: 768px) {
  span{
    font-size: var(--text-xs);
  }
}
</style>

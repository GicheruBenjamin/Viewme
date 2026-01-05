<script setup lang="ts">
import type { WorkApproachData } from "../types/contentdata"
defineProps<{ data: WorkApproachData }>()
</script>

<template>
  <section class="section">
    <h2 class="section-title">{{ data.title }}</h2>
    <p class="section-desc">{{ data.description }}</p>

    <div class="approaches">
      <div
        v-for="block in data.details"
        :key="block.name"
      >
        <h3>{{ block.name }}</h3>

        <div class="steps">
          <div
            v-for="step in block.steps"
            :key="step.step"
            class="card"
          >
            <strong>Step {{ step.step }}:</strong>
            <p>{{ step.title }}</p>
            <small>{{ step.info }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approaches {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

h3{
  font-family: var(--font-poppins);
  font-size: var(--text-2xl);
  font-weight: var(--font-thin);
}

.steps {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

strong{
  font-size: var(--text-base);
  font-family: 'Times New Roman', Times, serif;
  color: var(--color-vintage);
}

p{
  font-size: var(--text-base);
  font-family: var(--font-poppins);
  font-weight: var(--font-black);
}

small {
  color: var(--color-black);
  font-size: var(--text-sm);
  font-family: 'Courier New', Courier, monospace;
}
</style>

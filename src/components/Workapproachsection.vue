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

.steps {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

small {
  color: var(--color-grey);
}
</style>

<script setup lang="ts">
import { herodata, educationdata, techskillsdata, expriencedata, WorkApproachdata } from './data/contentdata';
import Imagecontainer from './components/Imagecontainer.vue';
import Herosection from './components/Herosection.vue';
import Educationsection from './components/Educationsection.vue';
import Technicalskillssection from './components/Technicalskillssection.vue';
import Experience from './components/Experiencesection.vue';
import Workapproachsection from './components/Workapproachsection.vue';
</script>

<template>
  <div class="appcontainer">
    <div class="image">
      <Imagecontainer />
    </div>
    <div class="content">
      <Herosection :data="herodata" />
      <Educationsection :data="educationdata" />
      <Technicalskillssection :data="techskillsdata" />
      <Experience :data="expriencedata" />
      <Workapproachsection :data="WorkApproachdata" />
    </div>
  </div>

</template>

<style scoped>
.appcontainer {
  background-color: var(--color-orange);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}

</style>

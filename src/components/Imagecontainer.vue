<script setup lang="ts">
</script>

<template>
    <div class="imagecontainer">
        <img src="/portimage.png" alt="" class="image">
    </div>
</template>

<style scoped>

.imagecontainer {
    position: relative;
    overflow: hidden;
}
.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>
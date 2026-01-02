<script setup lang="ts">
</script>

<template>
    <div class="imagecontainer">
        <img src="/portimage.png" alt="" class="image">
    </div>
</template>

<style scoped>

.imagecontainer {
    position: sticky;
    overflow: hidden;
    top: 0;
}
.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    box-shadow: 3px -3px 3px black;

}
</style>
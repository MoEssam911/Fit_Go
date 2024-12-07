<!-- components/ThemeSwitcher.vue -->
<template>
  <button
    @click="toggleTheme"
    type="button"
    class="frounded-md p-1.5 hover: dark:focus-visible:ring-primary-400 y"
  >
    <span v-if="$colorMode.value == 'dark'">
      <img src="../assets/images/icons/dark.svg" alt="dark" />
    </span>

    <span v-else>
      <img src="../assets/images/icons/light.svg" alt="light" />
    </span>
  </button>
</template>

<script setup>
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>

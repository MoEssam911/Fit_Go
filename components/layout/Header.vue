<template>
  <div
    class="flex items-center justify-between p-5 bg-lightGray text-darkGray dark:bg-darkBackground dark:text-darkText"
  >
    <h2 class="text-red dark:text-green">Logo</h2>

    <div class="flex gap-6">
      <NuxtLink class="text-white" :to="localePath('/')">Home </NuxtLink>
    </div>

    <div class="flex items-center gap-4">
      <SelectLanguage />

      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

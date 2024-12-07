<template>
  <div>
    <main class="min-h-screen dark:bg-slate-600 dark:text-white">
      <div>
        <p>{{ $t("welcome") }}</p>
        <p>{{ locale }}</p>
      </div>
    </main>
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>

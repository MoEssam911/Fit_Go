<template>
  <UPopover mode="hover">
    <UButton
      color="white"
      trailing-icon="material-symbols-light:language-chinese-dayi"
    />

    <template #panel>
      <div>
        <NuxtLink
          v-for="{ code, name } in locales"
          :key="code"
          class="flex items-center gap-3 py-2 px-3 text-white hover:bg-gray-600 transition-all duration-300"
          :class="
            code === locale
              ? 'opacity-100 border border-gray-700 rounded-md'
              : 'opacity-55'
          "
          :to="switchLocalePath(code)"
        >
          <UIcon
            v-if="name === 'عربي'"
            name="circle-flags:eg"
            class="w-5 h-5"
          />
          <UIcon
            v-if="name === 'English'"
            name="circle-flags:uk"
            class="w-5 h-5"
          />

          <span>{{ name }}</span>
        </NuxtLink>
      </div>
    </template>
  </UPopover>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  <Header />
  <NuxtPage />
</template>

<script setup>
const { locale } = useI18n();

useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Serif+Oriya:wght@400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap",
    },
  ],

  // to make the default direction is arabic
  htmlAttrs: {
    dir: locale.value === "ar" ? "rtl" : "ltr",
  },
});

// to watch new language selection
watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";

  useHead({
    htmlAttrs: {
      dir: isArabic ? "rtl" : "ltr",
    },
  });
});
</script>

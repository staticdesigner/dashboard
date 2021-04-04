<template>
  <div>
    <div class="dark-light" @click="toggleDark">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
    <div class="app">
      <AppBar />
      <div class="wrapper">
        <AppSideBar />
        <div class="main-container">
          <MainHeader />
          <Nuxt />
        </div>
      </div>
      <div
        class="overlay-app"
        :class="{ 'is-active': $store.state.popup }"
        @click="$store.dispatch('togglePopup')"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: 'light-mode',
    }
  },
  head() {
    return {
      bodyAttrs: { class: this.dark },
    }
  },

  methods: {
    toggleDark() {
      if (this.dark == 'light-mode') {
        this.dark = 'dark-mode'
        localStorage.setItem('globalDark', 'dark-mode')
      } else {
        this.dark = 'light-mode'
        localStorage.setItem('globalDark', 'light-mode')
      }
    },
  },

  beforeMount() {
    if (localStorage.getItem('globalDark')) {
      this.dark = localStorage.getItem('globalDark')
    }
  },
}
</script>

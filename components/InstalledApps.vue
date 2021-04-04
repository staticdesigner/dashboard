<template>
  <ul>
    <li
      class="adobe-product"
      v-for="(product, index) in $store.state.installedapps"
      :key="index"
    >
      <div class="products">
        <IconsPs v-if="product.id == 1" />
        <IconsAi v-if="product.id == 2" />
        <IconsAe v-if="product.id == 3" />
        {{ product.name }}
      </div>
      <span class="status">
        <span
          class="status-circle green"
          v-if="product.status == 'Updated'"
        ></span>
        <span
          class="status-circle"
          v-if="product.status == 'Update Available'"
        ></span>
        {{ product.status }}</span
      >
      <div class="button-wrapper">
        <button
          class="content-button status-button open"
          v-if="product.status == 'Updated'"
        >
          Open
        </button>
        <button
          class="content-button status-button"
          v-if="product.status == 'Update Available'"
          @click="$store.dispatch('togglePopup')"
        >
          Update this app
        </button>
        <div class="menu">
          <button class="dropdown" @click="isVisible" @blur="blurred">
            <ul>
              <li><a href="#">Go to Discover</a></li>
              <li><a href="#">Learn more</a></li>
              <li><a href="#">Uninstall</a></li>
            </ul>
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    isVisible(event) {
      event.currentTarget.classList.toggle('is-active')
      const overlay = document.querySelector('.content-wrapper')
      overlay.classList.add('overlay')
    },
    blurred() {
      const overlay = document.querySelector('.content-wrapper')
      overlay.classList.remove('overlay')
      const allmenus = document.querySelectorAll('.dropdown')
      allmenus.forEach((ele) => {
        ele.classList.remove('is-active')
      })
    },
  },
}
</script>

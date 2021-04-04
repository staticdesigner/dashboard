<template>
  <div class="main-header">
    <a class="menu-link-main" href="#">All Apps</a>
    <div class="header-menu">
      <a
        v-for="(item, index) in submenu"
        :key="index"
        class="main-header-link"
        :class="item.class"
        :href="item.href"
        @click.prevent="isActive(index)"
        >{{ item.text }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submenu: [
        {
          href: '#',
          text: 'Desktop',
          class: 'is-active',
        },
        {
          href: '#',
          text: 'Mobile',
          class: '',
        },
        {
          href: '#',
          text: 'Web',
          class: '',
        },
      ],
    }
  },
  methods: {
    isActive(index) {
      this.submenu.forEach((element) => {
        element.class = element.class.replace('is-active', '')
      })
      this.submenu[index].class += ' is-active'
    },
  },
}
</script>

<template>
  <div class="content-wrapper-header">
    <div class="content-wrapper-context">
      <h3 class="img-content">
        <slot name="icon"></slot>
        {{ title }}
      </h3>
      <div class="content-text">
        {{ text }}
      </div>
      <button class="content-button">{{ btntext }}</button>
    </div>
    <slot name="image">
      <img class="content-wrapper-img" :src="image" alt="" />
    </slot>
  </div>
</template>

<script>
export default {
  props: ['title', 'icon', 'text', 'image', 'btntext'],
}
</script>

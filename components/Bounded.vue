<template>
  <Component
    :is="as"
    :data-collapsible="collapsible || null"
    class="px-0"
    :class="{
      'pt-4 px-4 pb-12 md:pb-9 pt-5': yPadding === 'sm',
      'p-0 pb-10 px-0 md:px-4': yPadding === 'base',
      'py-32 md:py-48': yPadding === 'lg',
    }"
  >
    <div class="mx-auto w-full max-w-full">
      <slot />
    </div>
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: 'div'
    },
    yPadding: {
      type: String,
      default: 'base'
    },
    collapsible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

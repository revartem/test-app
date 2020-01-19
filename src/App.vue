<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>


<style>

  @font-face {
    font-family: 'SuisseIntl-Light';
    src: url('../fonts/SuisseIntl-Light.woff2') format('woff2'), /* Super Modern Browsers */
    url('../fonts/SuisseIntl-Light.woff') format('woff'); /* Pretty Modern Browsers */
  }
  @font-face {
    font-family: 'SuisseIntl';
    src: url('../fonts/SuisseIntl.woff2') format('woff2'), /* Super Modern Browsers */
    url('../fonts/SuisseIntl.woff') format('woff'); /* Pretty Modern Browsers */
  }
  @font-face {
    font-family: 'SuisseIntl-SemiBold';
    src: url('../fonts/SuisseIntl-SemiBold.woff2') format('woff2'), /* Super Modern Browsers */
    url('../fonts/SuisseIntl-SemiBold.woff') format('woff'); /* Pretty Modern Browsers */
  }


</style>


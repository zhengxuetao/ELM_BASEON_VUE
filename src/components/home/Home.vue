<template>
  <div>
    <location/>
    <search/>
    <ads/>
  </div>
</template>

<script>
  import Location from '@/components/home/Location'
  import Search from '@/components/home/Search'
  import Ads from '@/components/home/Ads'
  export default {
    name: "Home",
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    },
    components: {
      Location,
      Search,
      Ads
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <location/>
    <search/>
    <classify/>
    <ads/>
    <better/>
    <seller/>
  </div>
</template>

<script>
  import Location from '@/components/home/Location'
  import Search from '@/components/home/Search'
  import Ads from '@/components/home/Ads'
  import Classify from '@/components/home/Classify'
  import Better from '@/components/home/Better'
  import Seller from '@/components/home/Seller'

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
      Ads,
      Classify,
      Better,
      Seller
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

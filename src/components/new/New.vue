<template>
  <div>
      <MeiShiTuiJuan/>
    <TianTianTeJia/>
  </div>
</template>

<script>
  import TianTianTeJia from '@/components/new/TianTianTeJia'
  import MeiShiTuiJuan from '@/components/new/MeiShiTuiJuan'

  export default {
    name: "New",
    data() {
      return {
      };
    },
    components: {
      TianTianTeJia,
      MeiShiTuiJuan
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

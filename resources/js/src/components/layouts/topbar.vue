<template>
  <div id="topbarLayout">
    <div class="w-100 flex justify-center items-end h-100 q-pb-sm">
      <h5>{{route.meta.title}}</h5>
    </div>
  </div>
</template>
<script >
  import { inject } from 'vue';

  import { useRoute, useRouter } from 'vue-router';
  import utils from '@/util/httpUtil';
  export default {
    setup () {
      //vue provider
      const icons = inject('ionIcons')
      const route = useRoute();

      console.log(route)
      
      return {
        icons,
        route
      }
    }
  };
</script>
<style lang="scss" scoped>
.h-100{
  height: 100%;
}
#topbarLayout{
  height: 10%;

  width: 100%;

}
</style>
<template>
  <div class="q-py-sm q-px-md" style="height: 100%; overflow: hidden;">
    <div class=" q-pb-sm" :class="{'loan_container':ll}">
      <div class="row">
        <div class="col-12 flex items-center justify-between">
          <div class="text-subtitle1 q-mt-sm text-dark text-weight-bold">Tú préstamo</div>
          <div class="flex items-center q-mt-sm justify-between">

            <div class="text-subtitle1 text-weight-bold text-dark " v-if="ll" >
              Gs.{{ numberFormat(5035000) }}
            </div>
            <div>
              <q-icon
                name="eva-arrow-ios-forward-outline"
                size="sm"
                color="lightgdark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 80%; ">
      <div class="q-mt-md quote-section" style="height: 100%; overflow-y: scroll;" v-if="ll">
        <div class="row q-pb-md">
          <div class="col-12">
            <div class="text-subtitle1 text-center text-dark text-weight-medium">Cuotas</div>
          </div>
          <div class="col-12" >
            <div class="row" >
              <div class="col-12 flex items-center justify-between quote_container q-py-xs q-my-xs" v-for="n in 4" :key="n">
                <div class="q-m">
                  <div>
                    Cuota {{n}} de 8
                  </div>
                  <div class="quote_description">
                    Vencimiento 29/{{1+n}}/25
                  </div>
                </div>
                <div>
                  Gs.{{ numberFormat(250000) }}
                </div>
              </div>
              <div class="q-mt-md">
              </div>
            </div>
          </div>
          <div class="col-12 q-mt-md q-mb-sm" >
            <div class="text-subtitle1 text-center text-primary text-weight-medium text-decoration-underline">Ver todo</div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="w-100 column items-center">
          <div>
            <q-icon
              :name="icons.outlinedSentimentDissatisfied"
              size="7rem"
              color="primary"
              class="user-verify-user"
            />
          </div>
          <div class="w-100 text-center text-h6 text-weight-medium">
            No tienes ningún préstamo <br>aprobado 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { useAuthStore } from '@/services/store/auth.store'
  import util from '@/util/numberUtil'
  import { inject, ref } from 'vue'
  export default {
    setup() {
      //vue provider
      const user = useAuthStore().user;
      const icons = inject('ionIcons')
      const numberFormat = util.numberFormat
      const ll = true
      // Data
      return{
        icons,
        user,
        numberFormat,
        ll,
      }
    },
  }

</script>
<style lang="scss" scoped>
.loan_container{
  border-bottom: 1px solid #d3d3d3;
}
.quote_description {
  font-size: 12px; 
  color:lightgray ; 
}
.quote_container{
  border-bottom: 1px solid #d3d3d3;
}
.quote-section::-webkit-scrollbar {
    display: none;
}

</style>
<template>
  <div class="q-pt-md q-px-md q-pb-sm">
    <div>
      <div class="text-subtitle1 text-weight-medium">Préstamo</div>
      <div class="text-subtitle1 text-weight-bold">N° 619{{ loan.loan_number }}</div>
    </div>
    <div class="row q-px-none q-mt-sm">
      <div class="col-12 bg-white q-pa-7 flex items-center justify-between  loan_card" style="" >
        <div class="">
          <div class="text-weight-medium text-body2">Capital prestado</div>
          <div class="text-weight-medium text-body2">Gs. {{ numberFormat(loan.amount) }}</div>
        </div>
        <div class="">
          <div class="text-weight-medium text-body2">Falta pagar</div>
          <div class="text-weight-medium text-body2">Gs. {{ numberFormat(forPay()) }}</div>
        </div>
      </div>
    </div>
    <div class="q-mt-sm q-pt-xs">
      <q-linear-progress rounded size="15px"  :value="loan.pays_count/loan.quotas" color="positive" track-color="white" class="q-mt-sm w-100 loan_progress" />
      <div class="q-mt-sm text-body2">Pagado: {{loan.pays_count}}/{{ loan.quotas }} </div>
    </div>
  </div>
</template>
<script>
  import { useAuthStore } from '@/services/store/auth.store'
  import { useQuasar } from 'quasar'
  import wozIcons from '@/assets/icons/wozIcons'
  import util from '@/util/numberUtil'

  export default {
    props: {
      loan: Object,
    },
    setup (props) {
      //vue provider
      const $q = useQuasar();
      const numberFormat  = util.numberFormat

      // Data
      const loading = ref(false);
      const loan = props.loan
      

      // Methods
      const loadingShow = (state) => {
        loading.value = state;
      }
      const showNotify = (type, message) => {
        $q.notify({
          message: message,
          color: type,
          actions: [
            { icon: 'eva-close-outline', color: 'white', round: true, handler: () => { /* ... */ } }
          ]
        })
      }
      const forPay = () => {
        let amount = 0

        loan.pays.forEach(pay => {
          amount += pay.amount
        });

        // return loan.amount_to_pay - amount
        return loan.amount - amount


      }
      return {
        loan,
        numberFormat,
        wozIcons,
        forPay,
      }
    }
  };
</script>
<style lang="scss" scoped>
.q-pa-7{
  padding: 13px 13px;
}
.loan_card{
  border-radius: 15px;
  box-shadow: 0px 3px 6px 0px #aaaaaa
}
.loan_container{
  border-bottom: 1px solid #d3d3d3;
}
</style>
<style lang="scss">
.loan_progress {
  border-radius: 155px!important;
  border: 1px solid $positive;

  & .q-linear-progress__track{
    opacity: 1;
    border-radius: 155px!important;
  }
  & .q-linear-progress__model {
    border-radius: 155px!important;
  }
}
</style>
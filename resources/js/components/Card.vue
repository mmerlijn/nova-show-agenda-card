<template>
  <Card>
      <div class="p-2">
          <InputLabel for="period_">Andere periode</InputLabel>
          <select id="period_" class="rounded py-1 text-sm" v-model="next" @change="getAgenda">
              <option value="0">Deze week</option>
              <option value="1">Volgende week</option>
              <option value="2">Twee weken verder</option>
              <option value="3">Drie weken verder</option>
              <option value="4">Vier weken verder</option>
              <option value="5">Vijf weken verder</option>
          </select>
      </div>
      <div class="my-2 max-h-80 overflow-auto px-2" >
          <template v-for="(data,date) in agenda">
              <div class="border border-gray-300 rounded p-2 my-4 shadow-lg">
                  <div class="md:flex">
                      <div class="w-24 text-sm font-bold">
                          {{
                              data.day_text.substring(0, 2) + ' ' + date.substring(6, 8) + '-' + date.substring(4, 6)
                          }}
                      </div>
                      <div class="grow">
                          <Timebar :min="room.from" :max="room.to"/>
                      </div>
                  </div>
                  <ViewBar :date="date" :activities="data.activities" :min="room.from" :max="room.to" :room="room"/>
              </div>
          </template>
      </div>
  </Card>
</template>

<script setup>
import InputLabel from "./InputLabel.vue";
import {onMounted,ref} from "vue";
import Timebar from "./Timebar.vue";
import ViewBar from "./ViewBar.vue";

const next =ref(0)
const agenda = ref({});
const room = ref({})
const props = defineProps({
    card:Object,
    resource:Object,
    resourceId:Number,
    resourceName:String,
})
onMounted(()=>{
    getAgenda()
})
const getAgenda = () =>{
    Nova.request().get('/nova-vendor/nova-show-agenda-card/show-planning/'+props.resourceId+'/'+next.value)
        .then((response)=> {
            console.log(response.data)
            agenda.value = response.data.agenda
            room.value = response.data.room
        })
}
/*
export default {
    components: {InputLabel},

  props: [
    'card',

    // The following props are only available on resource detail cards...
    // 'resource',
    // 'resourceId',
    // 'resourceName',
  ],

  mounted() {
    //
  },
}
*/

</script>


<template>

    <div class="md:flex">
        <div class="w-24 font-semibold">Afspraken</div>
        <div class="relative h-6 z-0 w-full mt-1 bg-indigo-50" ref="daddy">
            <template v-for="(activity_,act_id) in activities">
                <template v-for="(activity,activity_id) in activity_">

                    <template v-for="(tb,ind) in activity.times" :key="'t'+ind+'_'+tb[0]">
                        <div
                            :style="{marginLeft: blokOffset(tb[0]), width: blokWidth(tb),backgroundColor: activity.color}"
                            :title="'Ingepland\n'+blokTitle(tb)+activity.name+'\nKamer: '+room.name"
                            class="absolute z-20 rounded h-5"
                        >&nbsp;
                        </div>
                    </template>
                </template>
            </template>
        </div>
    </div>

    <template v-for="(activity_,act_id) in activities">
        <div class="md:flex">
            <div class="w-24">{{ activity_.activity.name }}</div>
            <template v-for="(activity,activity_id) in activity_">

                <div class="relative h-3 z-0 w-full mt-1 bg-blue-50">

                    <div v-for="(tb,ind) in activity.clickTimes"
                         :key="'c'+ind+'_'+activity_id+'_'+tb[0]"
                         :style="{marginLeft: blokOffset(tb[0]), width: blokWidth(tb),backgroundColor:activity.color}"
                         :title="blokTitle(tb)+activity.name+'\nKamer: '+room.name"
                         class="absolute z-10 rounded h-3 ">
                        &nbsp;
                    </div>
                    <div v-for="(tb,ind) in activity.walkInTimes"
                         :key="'w'+ind+'_'+activity_id+'_'+tb[0]"
                         :style="{marginLeft: blokOffset(tb[0]), width: blokWidth(tb)}"
                         :title="blokTitle(tb)+activity.name+'\nKamer: '+room.name+'\nInloop geen afspraak voor nodig'"
                         class="absolute z-10 bg-yellow-200 rounded h-3">&nbsp;
                    </div>
                </div>
            </template>
        </div>
    </template>
</template>


<script setup>
/**
 * Receive min, max, room, date (Ymd)
 *
 * Emits @select-time ->object {
 *  array timeBlock,
 *  string start_time,
 *  string end_time,
 *  string date (Y-m-d),
 *  object room {id,name},
 *  object activity {name,color,id}
 *  }
 */


import {onBeforeUnmount, onMounted, ref, watch} from "vue";


const props = defineProps({
    min: {
        type: Number,
        default: 480,
    },
    max: {
        type: Number,
        default: 1020,
    },
    activities: {
        type: Object,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    room: {
        type: Object
    }
})
const settings = ref({
    start_time: 7,
    end_time: 17,
    factor: 1,
})
const daddy = ref(null);

const factorBar = () => {
    settings.value.start_time = Math.floor(props.min / 60) * 60
    settings.value.end_time = Math.ceil(props.max / 60) * 60
    settings.value.factor = daddy.value.clientWidth / (settings.value.end_time - settings.value.start_time)
    //settings.value.width = daddy.value.clientWidth

}
const handleResize = () => {
    factorBar()
}
watch(daddy, () => {
    factorBar()
}, {deep: true})

onMounted(() => {
    factorBar()
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})


const splitTimes = (activity) => {
    let splitTimesArray = []
    if (typeof activity.clickTimes !== undefined) {
        for (let timeBlock of activity.clickTimes) {
            for (let i = timeBlock[0] + activity.duration; i <= timeBlock[1]; i += activity.duration) {
                splitTimesArray.push([i - activity.duration, i])
            }
        }
    }
    return splitTimesArray;
}
const int2Time = (integer) => {
    let hours = Math.floor(integer / 60)
    let minutes = integer - hours * 60;
    //if(minutes < 10){
    //    minutes = '0'+minutes
    //}
    return hours + ':' + ((minutes < 10) ? '0' + minutes : minutes)
}

const blokOffset = (start_time) => {

    return (start_time - settings.value.start_time) * settings.value.factor + 'px'
}

const blokWidth = (timeBlock) => {
    return (timeBlock[1] - timeBlock[0]) * settings.value.factor + 'px'
}

const blokTitle = (timeBlock) => {
    return int2Time(timeBlock[0]) + '-' + int2Time(timeBlock[1]) + ' '
}

</script>

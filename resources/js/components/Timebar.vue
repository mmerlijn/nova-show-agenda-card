<template>
    <div ref="daddy"></div>
    <template v-if="settings.show_halfs">
        <div class="flex justify-between w-full font-semibold">
            <template v-for="n in settings.number_of_hours">
                <div class="bg-slate-300 w-full flex justify-between">
                    <span v-if="n>1">00</span>
                    <span v-else>&nbsp;</span>
                    <span>{{ n + settings.start_hour - 1 }}:</span>
                </div>
                <div class="bg-slate-100 w-full flex justify-between">
                    <span>30</span>
                    <span v-if="n < settings.number_of_hours">{{ n + settings.start_hour }}:</span>
                    <span v-else>&nbsp;</span>
                </div>
            </template>
        </div>
    </template>
    <template v-else>
        <div class="flex justify-between w-full font-semibold">
            <template v-for="n in settings.number_of_hours">
                <div class="bg-slate-300 w-full flex justify-start">
                    <span v-if="n>1">00</span>
                    <span v-else class="text-slate-300">00</span>
                </div>
                <div class="bg-slate-100 w-full flex justify-end">
                    <span v-if="n < settings.number_of_hours">{{ n + settings.start_hour }}:</span>
                    <span v-else class="text-slate-100">1</span>
                </div>
            </template>
        </div>
    </template>
</template>

<script setup>

import {onBeforeUnmount, onMounted, ref} from "vue";

const props = defineProps({
    min: {
        type: Number,
        default: 420,
    },
    max: {
        type: Number,
        default: 1140,
    },
})
const settings = ref({
    start_hour: 7,
    end_hour: 17,
    number_of_hours: 10,
    bar_width: 1000,
})
const daddy = ref(null);

const factorBar = () => {
    settings.value.start_hour = Math.floor(props.min / 60)
    settings.value.end_hour = Math.ceil(props.max / 60)
    settings.value.number_of_hours = settings.value.end_hour - settings.value.start_hour
    settings.value.show_halfs = daddy.value.clientWidth / settings.value.number_of_hours > 100

    //settings.value.width = daddy.value.clientWidth
}
const handleResize = () => {
    factorBar()
}

onMounted(() => {
    factorBar()
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

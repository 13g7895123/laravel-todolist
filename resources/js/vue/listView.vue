<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <list-item
                :item="item"
                class="bg-[e6e6e6] p-[5px] m-[5px]"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import listItem from './listItem';
import listItem from './listItem.vue';

export default {
    props: ['items'],
    components:{
        listItem
    }
}
</script>
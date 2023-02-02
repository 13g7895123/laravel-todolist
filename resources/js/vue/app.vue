<template>
    <div class="w-[330px] m-auto">
        <div class=" bg-[#e6e6e6] p-[10px]">
            <h2 class="text-center">Todo List</h2>
            <add-item-form />
            
        </div>
        <list-view :items="items"/>
    </div>
</template>

<script>
import addItemForm from './addItemForm.vue';
import listView from './listView.vue';
import listItem from './listItem.vue';
import axios from 'axios';

export default {
    components: {
        addItemForm,
        listView,
        listItem
    },
    data: function () {
        return {
            items: []
        }
    },
    methods:{
        getList(){
            axios.get('api/items')
            .then(response => {
                this.items = response.data
            }).catch(err => {
                console.log(err);
            })
        }
    },
    created(){
        this.getList();
    }
}
</script>
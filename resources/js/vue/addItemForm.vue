<template>
    <div class="flex justify-center items-center">
        <input 
            type="text" 
            class="bg-[#f7f7f7] border-0 outline-none p-[5px] mr-[10px] w-full"
            v-model="item.name"
        />
        <font-awesome-icon
            icon="plus-square" 
            @click="addItem()"
            :class="item.name ? 'active' : 'inactive', 'plus'" 
        />
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function(){
        return{
            item:{
                name: ""
            }
        }
    },
    methods: {
        addItem() {
            if(this.item.name == ''){
                return;
            }
            axios.post('api/item/store', {
                item: this.item
            }).then(response=>{
                if(response.status == 201){
                    this.item.name = '';
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
<style>
.plus{
    font-size: 20px;
}
.active{
    color: #00CE25;
}
.inactive{
    color: #999;;
}
</style>
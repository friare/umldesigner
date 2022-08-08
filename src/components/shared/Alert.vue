<template>
    <div :class="(status == 'alert-yes') ? 'gAlert gAlert-ok' : (status == 'alert-middle') ? 'gAlert gAlert-blue' : 'gAlert gAlert-no' ">
        <div class="i">
            <i class="fa fa-info-circle"></i>  
        </div>
        <div>
            {{ message }}
        </div>
    </div>    
</template>

<script>
export default {
    name: "AlertBox",
    props: {
        status: {type: String, default: 'alert-no'},
        message: String
    }
}
</script>

<style>
    .gAlert {
        display: inline-block;
        width: 28em;
        /* height: 4em; */
        position: fixed;
        /* border-radius: 10px; */
        bottom: 0.7em;
        left: 0 !important;
        right: 0;
        margin: auto;
        padding: 1em 1.5em;
        color: white;
        display: flex;
        flex-direction: row;
        z-index: 1000000000;
    }
    .gAlert .i{
        margin-right: 0.3em !important;
    }
    .gAlert-ok{
        background-color: #46911d;
    }
    .gAlert-no{
        background-color: #da3d3d;
    }
    .gAlert-blue{
        background-color: rgb(25, 110, 221);
    }
</style>
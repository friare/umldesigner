<template>
  <div>
    <button @click="$emit('onclick')" class="btn cfa-icon-btn" :title="label">
      <slot name="icon"></slot>
      <!--<span class="mText d-none d-md-block">{{ this.label }}</span>-->
    </button>
  </div>
</template>

<script>

export default {
  name: 'IconButton',
  props: {
    cssStyle: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scope>
.cfa-icon-btn{
  outline: none;
  border: none !important;
}
.cfa-icon-btn:hover{
  background-color: #f0f3f8;
}
</style>
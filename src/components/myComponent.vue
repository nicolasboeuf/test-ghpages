<template>
  <div id="myComponent">
     <span>Je suis un composant</span>
  </div>
</template>

<script>
//import store from '@/store'

export default {
  name: 'MyComponent',
  data(){
    return {
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
  },

  watch:{
  },

  created(){
    console.log("myComponent created")
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
  /* overload fonts path, to delete when parent has access */
  @import "../../css/overload-fonts.css";

  span{
    color:red;
  }

  @media (max-width: 728px) {
    span{
      color:blue;
    }    
  }


</style>

<template>
    <div>
        <button @click="clickMobile">Click me</button>
    </div>
</template>

<script>
    export default {
        name: 'Mobile',
        data () {
            return {
                isMobile: true
            }
        },
 
        methods: {
           clickMobile() {
               return this.$root.getMobile()
           }
        }
        
    }
</script>

<style lang="scss" scoped>
</style>
© 2019 GitHub, Inc.
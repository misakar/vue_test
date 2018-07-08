<style scoped>
.other {
    min-height: 1000px;
}
</style>

<template>
<div class="other">
    <h1>OtherPage</h1>
    <router-link :to="{ name: 'TestVueIframe' }">
        iframe
    </router-link>
    <router-link :to="{ name: 'OtherPage' }">
        OtherPage
    </router-link>
</div>
</template>

<script>
export default {
    name: 'OtherPage',
    created () {
        console.log("---- OtherPage ----")
    },
    destoryed () {
        console.log("otherpage ----> D")  
    }
}
</script>
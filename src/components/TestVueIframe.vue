<style scoped>
.test {
    min-height: 1000px;
}
</style>

<template>
<div class="test">
    <h1>Test Vue Iframe Cache</h1>
    <div id="frame" style="display:flex; margin-left: 28%;">
        <div id="frame1" style="height:100px;width:200px;margin-right:20px">
            <router-link :to="{ name: 'TestVueIframe' }">
                iframe
            </router-link>
            <!--a href="/">iframe</a-->
        </div>
        <div id="frame2" style="height:100px; width:200px;margin-right:20px">
            <router-link :to="{ name: 'OtherPage' }">
                OtherPage
            </router-link>
            <!--a href="/other">OtherPage</a-->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'TestVueIframe',
    created () {
        console.log(this)
    },
    destoryed () {
        console.log('>>>>>>>>>> D');
    }
}
</script>

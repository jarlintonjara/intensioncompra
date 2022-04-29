<template>
    <a class="js-fancybox"><slot /></a>
</template>

<script>

export default {
    name: "fancybox",
    mounted() {
        $(".js-fancybox").fancybox({
        infobar: false,
        buttons: [
            //"zoom",
            //"share",
            //"slideShow",
            //"fullScreen",
            "download",
            //"thumbs",
            "close"
            ]
        });
    }
}
</script>
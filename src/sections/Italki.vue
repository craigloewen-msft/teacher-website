<template>
    <div id="italki" class="container section-padding">
        <h2 class="section-title wow fadeInUp">Learn with me on Italki</h2>
        <div class="italki-frame-container">
        <iframe class="italki-frame" src="https://www.italki.com/teacher/8170112/korean"></iframe>
        </div>
        </div>
</template>

<script>

export default {
    name: "Italki",    
}
</script>

<style>

.italki-frame {
    width: 100%;
    height: 700px;
}

.italki-frame-container {
    margin: 0 50px 0;
}

</style>
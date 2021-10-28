<template>
  <section id="instagram" class="section-padding">
    <div class="container align-center">
      <h2 class="section-title wow fadeInUp">Follow me on Instagram</h2>
      <div class="row">
        <div class="col-md-4">
          <InstagramEmbed
            instagramURL="https://www.instagram.com/p/CVkxvwRJHfj/"
          />
        </div>
        <div class="col-md-4">
          <InstagramEmbed
            instagramURL="https://www.instagram.com/p/CVfDoSUB6Oz/"
          />
        </div>
        <div class="col-md-4">
          <InstagramEmbed
            instagramURL="https://www.instagram.com/p/CVeWHcFhjEn/"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InstagramEmbed from "../components/InstagramEmbed.vue";

export default {
  name: "Instagram",
  components: { InstagramEmbed },
};
</script>

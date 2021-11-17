<template>
  <section id="instagram" class="section-padding">
    <div class="container align-center">
      <h3 class="section-title wow fadeInUp">Follow me on Instagram</h3>
      <div class="row">
        <div class="col-md-4">
          <InstagramEmbed
            instagramURL="https://www.instagram.com/reel/CVwr-zahlFW/?utm_medium=copy_link/"
          />
        </div>
        <div class="col-md-4">
          <InstagramEmbed
            instagramURL="https://www.instagram.com/reel/CWKaVbNBYZ1/?utm_medium=copy_link/"
          />
        </div>
        <div class="col-md-4">
          <InstagramEmbed
            instagramURL="https://www.instagram.com/reel/CWSH9NxBkg9/?utm_medium=copy_link/"
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

<template>
  <header class="header">
    <nav class="navbar navbar-custom" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#custom-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html"
            ><img src="assets/images/logo.png" alt=""
          /></a>
        </div>

        <div class="collapse navbar-collapse" id="custom-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#italki">Italki</a></li>
            <li><a href="#contactme">Contact Me</a></li>
            <li><a href="#notice">Notices</a></li>
          </ul>
        </div>
      </div>
      <!-- .container -->
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "Navigation",
};
</script>

<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="color: black;"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Brandon Bates</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a
              class="nav-link"
              href="https://docs.google.com/document/d/10c2Y7JIWR5EZBroxV1L9XZBzTxLPKAQyexH9d02k_8s/export?format=pdf"
              >Download Resume</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              href="https://www.linkedin.com/in/brandon-bates-178a86165/"
              >LinkedIn</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              href="https://www.github.com/Banjo1224"
              >Github</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              href="mailto:bbates377@gmail.com"
              >Email</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {},
};
</script>

<style scoped>

</style>
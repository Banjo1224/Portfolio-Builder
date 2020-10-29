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
      <a class="navbar-brand" href="#">{{DATA.name}}</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a
              class="nav-link"
              v-bind:href="DATA.resume"
              >Resume</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              v-bind:href="DATA.linkedin"
              >LinkedIn</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              v-bind:href="DATA.github"
              >Github</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              target="_blank"
              v-bind:href="DATA.email"
              >Email</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import DATA from '../../../toBuild/data.json';

export default {
  name: "Navigation",
  props: {},
};
</script>

<style scoped>

</style>
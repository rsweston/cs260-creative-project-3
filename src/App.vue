<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">LifeQuest</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link">Quests</router-link>
        </div>
      </div>
    </nav>

    <router-view/>

    <div class="footer">
      <a href="https://github.com/rsweston/cs260-creative-project-3.git"
        target="_blank">GitHub</a>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #E6EAEF;
  font-family: "Lora", serif;
  font-size: 16px;
  color: #1B150E;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Montserrat", sans-serif;
}

nav {
  width: 100%;
}

.navbar-nav {
  margin-left: auto;
}

.bg-dark {
  background-color: #1B150E !important;
}

.navbar-brand, .nav-item {
  font-family: "Montserrat", sans-serif;
}

.navbar-brand {
  font-weight: bold;
  color: #3FC1CA !important;
}

.footer {
  margin-top: auto;
  padding: 25px 0 10px 0;
}

.footer a {
  font-size: 1em;
  color: #96A2B0;
  text-decoration: none;
}

.footer a:hover {
  color: #1B150E;
  text-decoration: underline;
}
</style>

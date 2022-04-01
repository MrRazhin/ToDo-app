<template>
  <div class="container">
    <header class="header">
      <h1 class="header__title">
        ToDO
      </h1>
      <ul class="header-nav">
        <li class="header-nav__item">
           <router-link class="header-nav__link" v-bind:class="{ active: this.$route.name == 'create' }" :to="{name: 'create'}">
            <img src="img/vector.svg" alt="create" > <span>Create</span>
          </router-link>
        </li>
        <li class="header-nav__item">
          <router-link class="header-nav__link" v-bind:class="{ active: this.$route.name == 'list' }"   :to="{name: 'list'}">
            <img src="img/list.svg" alt="list" > <span>List</span>
          </router-link>
        </li>
      </ul>
    </header>
    <main class="main"> 
      <router-view/>   
    </main>
  </div>
</template>

<script>
export default {

  
}

</script>

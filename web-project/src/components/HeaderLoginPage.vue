<template>
    <headers>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Coffe Shop</a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav" v-if="!auth">
              <li class="nav-item">
                <a href="/login" class="nav-link">Login</a>
              </li>
              <li class="nav-item">
                <a href="/register" class="nav-link">Register</a>
              </li>
              <li class="nav-item">
                <a href="/about" class="nav-link">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </headers>
</template>

<script>
export default {
 name: 'HeaderLoginPage',
}
</script>
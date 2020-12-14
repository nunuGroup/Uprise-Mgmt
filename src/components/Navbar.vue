<template>
  <div class="navbar-container">
    <ul>
        <router-link to="/"><li class="nav-item hoverable">Home</li></router-link>
        <router-link to="/#about"><li class="nav-item hoverable">About</li></router-link>
        <router-link to="/#services"><li class="nav-item hoverable">Services</li></router-link>
        <router-link to="/social_media_management"><li class="nav-item hoverable">Social Media Management</li></router-link>
        <router-link to="/#case_studies"><li class="nav-item hoverable">Case Studies</li></router-link>
        <router-link to="/#contact"><li class="nav-item hoverable">Contact</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Navbar',

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';

.router-link-exact-active li {
    //background: red !important;
    opacity: 1 !important;
    //font-weight: bold !important;
}

.navbar-container {
    //background: rgba(orange, 0.2);
    color: white;
    height: 120px;
    width: 100%;
    position: absolute;
    z-index: 999;
    //padding-right: 64px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    line-height: 0px;
    mix-blend-mode: difference;

    ul {
        list-style: none;
        display: flex;
        margin: 0px;
        padding-right: 64px;
    }

    a {
        text-decoration: none;
        color: white;
        font-family: 'Gotham', Helvetica, Arial, sans-serif;
        font-weight: normal;
        cursor: none;
    }

    li {
        padding-right: 16px;
        padding-left: 16px;
        height: 0px;
        opacity: 0.3;
        transition: 200ms;
        font-weight: normal;

        &:hover {
            opacity: 1;
            //background: rgba(black, 0.5);
        }
    }
}

</style>
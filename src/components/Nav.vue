<template>
    <nav id="nav">
        <ul>
            <li> <router-link :to="{path:'/'}">Home</router-link></li>
            <li> <router-link :to="{path:'/news'}">News</router-link></li>
            <li> <router-link :to="{path:'/petition_strikes'}">Petition and Strikes</router-link></li>
            <li><router-link :to="{path:'/download'}">Download</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
    #nav {
        transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
        color: #636363;
        position: absolute;
        width: 64em;
        max-width: calc(100% - 4em);
        padding: 1em;
        background-color: #f7f7f7;
        border-top-left-radius: 0.25em;
        border-top-right-radius: 0.25em;
        cursor: default;
        text-align: center;
        display: block;
        box-sizing: border-box;
    }

    #nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    #nav ul li {
        transition: margin 0.2s ease;
        display: inline-block;
        margin: 0 0.35em;
        padding: 0;
        vertical-align: middle;
    }
    #nav ul li a.active {
        background-color: #ffffff;
        box-shadow: none;
    }
    #nav ul li a {
        transition: font-size 0.2s ease;
        display: inline-block;
        height: 2.25em;
        line-height: 2.25em;
        padding: 0 1.25em;
        border: 0;
        border-radius: 8px;
        box-shadow: inset 0 0 0 1px transparent;
    }
    #nav ul li a:hover {
        background-color: rgba(222, 222, 222, 0.25);
    }

</style>

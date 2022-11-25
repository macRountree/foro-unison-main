<template>
    <div class="top-bar">
        <nav class="navbar">
            
            <div class="navbar__titulo">
                <div class="navbar__logo">
                    <img src="../assets/escudo-unison.gif" alt="escudo-unison" class="img">
                </div>
                <div class="navbar__txt"><router-link to="/">Foro Unison</router-link></div>
            </div>
            <div class="navbar__links">
                <router-link to="/add-forum"> Añadir un Foro |</router-link>
                <router-link to="/login"> Iniciar Sesión </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'TopBar'
}
</script>

<style scoped>

.top-bar{
    background-color: blue;
    padding: 0 40px;
}

.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.navbar__titulo{
    display: flex;
    font-size: 30px;
    font-weight: 700;
}

.img{
    height: 40px;
    margin-right: 10px;
}

.navbar__txt a{
    text-decoration: none;
    color: white;
}

.navbar__links{
    align-items:center;
}

.navbar__links a{
    text-decoration: none;
    color: wheat;
}


</style>
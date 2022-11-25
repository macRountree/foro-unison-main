<template>
    <body>
      <TopBar/>
      <div class="main">
        <form @submit.prevent="addThread(tema, contenido)" class="addForum">
          <div>
            <p>Tema:</p>
            <input v-model="tema" placeholder="Escribe algun tema.."><br>
            <p>Contenido:</p>
            <textarea v-model="contenido" placeholder="Escribe su contenido.."></textarea><br>
            <button type="sumbit">Subir</button>
          </div>
        </form>
      </div>
    </body>
</template>

<script>
import data from '../../db/data';
import TopBar from '../TopBar.vue';

export default {
  data() {
    return {
      foros: data
    };
  },
    components:{
    TopBar,
  },
  //Aqui definimos nuestros metodos de js
  methods: {
    //este va ser nuestro método para añadir foros a la base de datos local
    addThread: function(tema, contenido){
      let foros = this.foros

      //lo que hace esta condicional es salir de la funcion si alguna de estas variables es "undefined"
      if (!tema || !contenido) return;

      foros.push({
        id: foros.length + 1,
        title: tema,
        author: "Juanito",
        date: Date.now(),
        content: contenido,
        comments:[]
      })

      //observar resultados
      console.log(foros)
    }
  }
}
</script>

<style scoped>

  body{
    margin: 10px 60px;
  }

  p{
    margin: 0;
  }

  .main{
    background-color: #F5F6EF;
    padding: 10px 15px;
  }

  .addForum{
    display: flex;
    justify-content: center;
  }

</style>
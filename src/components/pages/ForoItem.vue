<template>
    <body>
        <!-- componente de vue que es el menu -->
        <TopBar/>
        <div class="main">
          <div class="header">
              <h4 class="title">
              {{foros[this.id].title}}
            </h4>
            <div class="bottom">
              <p class="timestamp">
                {{new Date(foros[this.id].date).toLocaleString()}}
              </p>
              <p class="comment-count">
                {{foros[this.id].comments.length}} comments
              </p>
            </div>
          </div>
          <textarea></textarea>
          <button v-on:click="addComment(foros[this.id].comments)">add comment</button>
          <div v-for="comment in foros[this.id].comments" v-bind:key="comment.id" class="comments">
              <div class="comment">
                  <div class="top-comment">
                      <p class="user">
                        {{comment.author}}
                      </p>
                      <p class="comment-ts">
                        {{new Date(comment.date).toLocaleString()}}
                      </p>
                  </div>
                  <div class="comment-content">
                      {{comment.content}}
                  </div>
            </div>
          </div>
        </div>
    </body>
</template>

<script>
import data from '../../db/data';
import TopBar from '../TopBar.vue';

export default {
  data() {
    return {
      id: '',
      foros: data
    };
  },
  created() {
    this.id = this.$route.params.id - 1
  },
  //Aqui definimos nuestros componentes de vue
  components:{
    TopBar,
  },
  //Aqui definimos nuestros metodos de js
  methods: {

    //este va ser nuestro método para añadir comentarios
    addComment: function(comentarioNuevo){
      let txt = document.querySelector('textarea');
      comentarioNuevo.push({

        id: comentarioNuevo.length + 1,
        author: "Juanito",
        date: Date.now(),
        content: txt.value
        
      })
      txt.value = '';
    }
  }
}
</script>


<style scoped>
  body{
    margin: 10px 60px;
  }

  a{
    text-decoration: none;
    color: black;
  }

  h1, h4, ol{
    margin: 0;
  }

  li{
    list-style-type: none;
  }

  p{
    margin: 5px 0;
  }

  textarea{
    width: 80%;
    height: 80px;
  }

  button{
    display: block;
    margin: 10px 0;
  }

  .main{
    background-color: #F5F6EF;
    padding: 10px 40px;
  }

  .comments{
     margin: 40px;
  }

  .comment{
    margin: 20px 0;
  }

  .row {
    padding: 5px 0;
  }

  .bottom, .top-comment{
    display: flex;
    color: gray;
    font-size: 12px;
  }

  .timestamp{
    padding-right: 10px;
  }

  .comment-ts {
    padding-left: 10px;
  }
</style>

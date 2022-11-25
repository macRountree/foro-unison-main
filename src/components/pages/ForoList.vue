<template>
  <body class="list">
    <TopBar/>
    <div class="main">
      <ol>
        <li v-for="foro in foros" v-bind:key="foro.id">
          <router-link :to="`/foro/${foro.id}`">
            <h4 class="title">
              {{foro.title}}
            </h4>
            <div class="bottom">
              <p class="timestamp">
                {{new Date(foro.date).toLocaleString()}}
              </p>
              <p class="comment-count">
                {{foro.comments.length}} comments
              </p>
            </div>
          </router-link>
        </li>
      </ol>
    </div>
  </body>
</template>

<script>
import data from '../../db/data';
import TopBar from '../TopBar.vue'

export default {
  data() {
    return {
        foros: data
    };
  },
  //Aqui definimos nuestros componentes de vue
  components:{
    TopBar,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

  .main{
    background-color: #F5F6EF;
    padding: 10px 15px;
  }

  .row {
    padding: 5px 0;
  }

  .bottom{
    display: flex;
    color: gray;
    font-size: 12px;
  }

  .timestamp{
    padding-right: 10px;
  }
</style>

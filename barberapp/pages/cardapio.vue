<template>
  <div class="container">
    <b-card>
    <b-card-img src="~/assets/Brasao.png" alt="logo" class="header-card"></b-card-img>
           
            <b-col>Cardápio</b-col>      
     <b-card-header>
     
        
     </b-card-header>
    <b-card-body>
     <b-card-text>
      <b-table :items="items" class="cardapio" align='center'></b-table>


        
     </b-card-text>
    </b-card-body>  
    </b-card>
  </div>
</template>

<script>
export default {
    name:"UserPage",
    data () {
      return{
        items:[
          {"item":"Cerveja", "Valor": 5.00},
          {"item":"Cerveja", "Valor": 5.00},
          {"item":"Cerveja", "Valor": 5.00},
          {"item":"Cerveja", "Valor": 5.00},
        ],

       

      }
    },


}
</script>



<style>
  .cardapio {
    background-color: #640101;
    color: #ffd700;
    align-content: 'center';
  }

  .header-card {
  height: 80px;
  width: 80px;
 
}
</style>
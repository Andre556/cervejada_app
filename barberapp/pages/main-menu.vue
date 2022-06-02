<template>
  <b-container fluid="lg" class="persona-cointainer">
    <b-row class="justify-content-lg-center">
      <b-col col md="5">
        <b-card body-class="body-card" align="center">
          <b-card-header>
            <b-card-img
              src="~/assets/Brasao.png"
              alt="Logo"
              class="header-card"
            ></b-card-img>
          </b-card-header>

          <b-card-text>
          
         
              
              <b-button class="primary-color" @click="$router.push('/cardapio')">Cardapio</b-button>
              <br>
              <br>
              <b-button class="primary-color">Mapa do Evento</b-button>
              <br>
              <br> 
              <b-button class="primary-color">Voucher</b-button>
              <br>
              <br> 
              <b-button class="primary-color">Te vi na cervejada</b-button>
              
           
          
                
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MainMenu",
  
}

</script>

<style>
body {
  background-color: white;
}

.facebook {
  color: white;
  background-color: #3b5998;
  border-color: #3b5998;
}

.facebook:hover {
  color: #3b5998;
  background: transparent;
  border-color: #3b5998;
}

.google {
  color: white;
  background-color: #9c0e0e;
  border-color: #9c0e0e;
 
}

.google:hover {
  color: #9c0e0e;
  background: transparent;
  border-color: #9c0e0e;
}

.apple {
  color: black;
  background: white;
}

.apple:hover {
  color: white;
  background: transparent;
  border-color: white;
}

.body-card {
  background-color: #640101;
  color: #ffd700;
  border-style: solid;
  border-radius: 10px;
  border-color: #640101;
}

.primary-color {
  background: #ffd700;
  color: black;
  height: 70px;
  width: 300px;
}

.header-card {
  height: 180px;
  width: 180px;
}

.persona-cointainer {
  background-color: white;
  align-content: center;
}
</style>
<template>
  <div class="home">
    <!-- <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog transition="dialog-top-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on">From the top</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>Opening from the top</v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row> -->

    <v-row class="border">
      <v-col cols="12" sm="8" md="6" class="mx-auto">
        <v-card class="mx-auto" max-width="100%" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Salam aleykum
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-text
            >Ceci est une petite application qui aura pour objectif de faire
            deux choses. La premiere sera d'evaluer vos connaissances, ne vous
            inquietez pas ca sera trés basique. <br />
            La deuxiemme sera de faire un petit sondage pour la choura afin
            d'avoir un avis sur les avis et les ressentis de chacun.
            <br />
            Une fois que vous aurez cliquer sur "Commencer", une serie de
            question s'affichera. Ca sera des questions à choix multiples,
            veuillez faire de votre mieux. Un chronometre s'affichera pour
            limiter l'experience dans le temps. <br />
            Lorsque le temps s'écoulera toutes les reponses seront enregistrer
            puis un classement sera établit.
            <br />
            Le frere avec le plus de points recevra un petit cadeau.
            <br />
            Pour ce questionnaire votre nom est necessaire. Ecrivez votre nom
            puis commencer! <br />
          </v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="6" class="mx-auto">
              <v-text-field label="Nom"></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-btn color="primary" depressed> Commencer </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      dialog: false,
      local: "okay",
    };
  },
  components: {
    HelloWorld,
  },
  mounted() {
    if (localStorage.getItem("init") !== true) {
      this.dialog = true;
      this.local = "false";
    } else {
      //this.$router.push();
    }
  },
  computed() {},
};
</script>

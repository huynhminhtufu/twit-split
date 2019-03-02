<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>ZALORA</span>
        <span class="font-weight-light">TWITSPLIT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://mrhmt.com" target="_blank">
        <span class="mr-2">Tu Huynh's Blog</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

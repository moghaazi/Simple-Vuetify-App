<!-- =========================== Template ===================================== -->
<template>
  <nav>
    <!-- ----------- Toolbar ----------------------- -->
    <v-toolbar class="pink mb-10 mt-2" rounded>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- Title -->
      <v-toolbar-title class="text-h3 font-weight-bold mr-5">
        <span class="font-weight-light mr-2">Todo</span>
        <span class="mr-5">Moghazi</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Btn -->
      <v-btn rounded class="pink darken-3 white--text">
        <span class="text-h6 text-capitalize">Sign Out</span>
        <v-icon right>mdi-exit-run</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- ----------- Navigation ----------------------- -->
    <v-navigation-drawer v-model="drawer" app dark color="#121212">
      <!-- Close Btn -->
      <v-btn @click="drawer = !drawer" fab class="mt-2 ml-2 mb-5">
        <v-icon>mdi-close-box</v-icon></v-btn
      >

      <!-- List -->
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.route"
          >
            <!-- Icon Item -->
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <!-- Icon Text -->
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold text-h4">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<!-- =========================== Script ===================================== -->
<script>
export default {
  // Data
  data: () => ({
    drawer: false,
    items: [
      { text: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
      { text: 'Projects', icon: 'mdi-folder', route: '/projects' },
      { text: 'Team', icon: 'mdi-account-group', route: '/team' },
    ],
  }),
}
</script>

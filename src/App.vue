<!-- =========================== Template ===================================== -->
<template>
  <v-app class="container" style="background-color:#121212; color:white">
    <!-- Search -->
    <search></search>

    <!-- NabBar -->
    <navbar></navbar>

    <!-- Paragraph -->
    <p class="text-h1 orange--text font-weight-bold">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </p>

    <!-- Dashboard -->
    <dashboard></dashboard>

    <!-- Tolltip -->
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <h1 v-on="on" class="mt-5 text-center">
          Hover to show a Tooltip
        </h1>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <!-- Badge -->
    <v-badge left color="green">
      <v-icon slot="badge" class=" black--text">5</v-icon>
      <span class="font-weight-bold text-h4">Buttons</span>
    </v-badge>

    <!-- Alert 1 -->
    <v-alert
      border="left"
      type="error"
      class="mt-5 font-weight-bold text-h4"
      colored-border
      dark
      elevation="5"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </v-alert>

    <!-- Alert 2 -->
    <v-alert
      class="mt-5 font-weight-bold text-h4"
      border="left"
      icon="mdi-wheelchair-accessibility"
      type="error"
      prominent
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </v-alert>

    <!-- Cards -->
    <v-row justify="center">
      <v-card
        class="pa-8 mt-5 rounded-tr-xl rounded-bl-xl green white--text "
        elevation="5"
        width="400"
      >
        <v-card-title class="font-weight-bold text-h2">
          Title
        </v-card-title>
        <v-avatar>
          <v-btn fab>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-avatar>
        <v-card-actions>
          <v-btn text color="pink" class="text-h5 font-weight-bold"
            >Login</v-btn
          >
        </v-card-actions>
        <v-card-text class="text-h4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </v-card-text>
      </v-card>
      <!-- ----------- Card 2 ----------------------- -->
      <v-card
        class="mx-auto mt-10 rounded-tr-xl rounded-bl-xl"
        color="#26c6da"
        dark
        max-width="600"
      >
        <!-- Title -->
        <v-card-title>
          <v-icon large left>
            mdi-twitter
          </v-icon>
          Twitter
        </v-card-title>
        <!-- Text -->
        <v-card-text class="headline font-weight-bold">
          "Turns out semicolon-less style is easier and safer in TS because
          most gotcha edge cases are type invalid as well."
        </v-card-text>
        <!-- Action -->
        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Evan You</v-list-item-title>
            </v-list-item-content>
            <v-row align="center" justify="end">
              <v-icon class="mr-1">
                mdi-heart
              </v-icon>
              <span class="subheading mr-2">256</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1">
                mdi-share-variant
              </v-icon>
              <span class="subheading">45</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-row>

    <!-- Avatar -->
    <v-row justify="center" class="mt-10">
      <v-avatar color="pink" size="80">
        <v-icon x-large color="white">mdi-account</v-icon>
      </v-avatar>
    </v-row>

    <!-- Expansion Panels -->
    <v-expansion-panels class="mt-10">
      <v-expansion-panel v-for="(item, i) in 5" :key="i">
        <v-expansion-panel-header class="text-h4 font-weight-bold">
          Item
        </v-expansion-panel-header>
        <v-expansion-panel-content class="text-h5 font-weight-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- Date picker -->
    <v-date-picker
      class="mt-10"
      v-model="value"
      :landscape="true"
      :reactive="true"
    ></v-date-picker>

    <!-- Menu -->
    <div class="text-center mt-10">
      <v-menu class="mt-10" transition="slide-x-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="font-weight-bold text-h5 "
            v-bind="attrs"
            v-on="on"
          >
            Dropdown
          </v-btn>
        </template>
        <v-list class="rounded-br-xl">
          <v-list-item v-for="(link, index) in links" :key="index">
            <v-list-item-title class="font-weight-bold text-h5">
              {{ link.item }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- Dialog -->
    <div class="text-center mt-10 ">
      <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            rounded
            class="orange black--text font-weight-bold text-h5"
            v-bind="attrs"
            v-on="on"
          >
            Dialog
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Privacy Policy
          </v-card-title>
          <v-card-text class=" text-h5 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="font-weight-bold text-h6"
              text
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- Form -->
    <v-form class="my-10">
      <v-text-field
        label="Name"
        solo
        prepend-icon="mdi-account"
        dark
      ></v-text-field>

      <v-text-field
        label="password"
        solo
        prepend-icon="mdi-key"
        rules="passwordRules"
        dark
      ></v-text-field>

      <v-text-field
        v-model="password"
        :prepend-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
        solo
        dark
      ></v-text-field>

      <v-text-field
        label="Email"
        solo
        prepend-icon="mdi-email"
        dark
      ></v-text-field>

      <v-textarea
        label="Message"
        solo
        prepend-icon="mdi-message"
        dark
      ></v-textarea>

      <v-btn class="teal white--text font-weight-bold text-h5" rounded>
        Submit
      </v-btn>
    </v-form>

    <!-- SnackBar -->
    <div class="text-center">
      <v-btn class="font-weight-bold text-h5" @click="snackbar = true">
        Open Snackbar
      </v-btn>

      <v-snackbar v-model="snackbar" :multi-line="multiLine">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-app>
</template>

<!-- =========================== Script ===================================== -->
<script>
import Navbar from './components/Navbar'
import Search from './components/Search'
import Dashboard from './components/Dashboard'

export default {
  // Components
  components: { Navbar, Search, Dashboard },

  // Data
  data: () => ({
    multiLine: true,
    snackbar: false,
    text: `I'm a multi-line snackbar.`,

    team: [
      { name: 'The Net Ninja', role: 'Web developer' },
      { name: 'Ryu', role: 'Graphic designer' },
      { name: 'Chun Li', role: 'Web developer' },
      { name: 'Gouken', role: 'Social media maverick' },
      { name: 'Yoshi', role: 'Sales guru' },
    ],

    links: [
      { item: 'One' },
      { item: 'Two' },
      { item: 'Three' },
      { item: 'four' },
    ],

    dialog: false,

    show1: false,
    password: 'Password',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
}
</script>

<!-- =========================== Style ===================================== -->
<style lang="scss" scoped>
.v-tooltip__content {
  transform: none;
}

v-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

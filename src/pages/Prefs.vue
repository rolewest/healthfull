<template>
  <div class="paperSheet shadow q-ma-lg text-center">
    <h2 class="title-h4">Preferences</h2>
  </div>
  <div class="questItem">
    <q-btn @click="showResetDialog = true" color="info">
      Reset ALL settings
    </q-btn>
  </div>

  <!-- alert window for save list -->
  <q-dialog v-model="showResetDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">
          <q-icon name="mdi-delete-forever" size="2em"></q-icon>
          {{ "Reset ALL Saved Data?" }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ "Are you sure? This will remove ALL saved data." }}
      </q-card-section>

      <q-card-actions align="right">
        <div>
          <q-btn label="Cancel" color="positive" v-close-popup />
          <q-btn
            label="DELETE EVERYTHING!"
            @click="deleteAllPrefs"
            color="negative"
            v-close-popup
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--  -->
</template>

<script>
import { LocalStorage, SessionStorage } from "quasar";
export default {
  data() {
    return {
      showResetDialog: false,
    };
  },
  methods: {
    deleteAllPrefs() {
      LocalStorage.clear();
    },
  },
};
</script>

<style></style>

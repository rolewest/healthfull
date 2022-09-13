<!-- https://forum.quasar-framework.org/topic/5523/table-slots-disappear-when-grid-mode/5 -->
<template v-slot:item="props">
  <div
    class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
    :style="props.selected ? 'transform: scale(0.95);' : ''"
  >
    <q-card :class="props.selected ? 'bg-grey-2' : ''">
      <q-card-section>
        <q-checkbox dense v-model="props.selected" :label="props.row.name" />
      </q-card-section>
      <q-separator />
      <q-list dense>
        <q-item
          v-for="col in props.cols.filter((col) => col.name !== 'desc')"
          :key="col.name"
        >
          <div class="q-table__grid-item-row">
            <div class="q-table__grid-item-title">{{ col.label }}</div>
            <div class="q-table__grid-item-value" v-if="col.label != 'edit'">
              {{ col.value }}
            </div>
            <div v-else>
              <alert-edit-delete
                :alertId="props.row.id"
                @handleDelete="handleDelete"
              />
            </div>
          </div>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["props"],

  components: {
    "alert-edit-delete": require("components/alert/TableGrid.vue").default,
  },

  methods: {
    handleDelete(id) {
      this.$emit("handleDelete", id);
    },
  },
};
</script>

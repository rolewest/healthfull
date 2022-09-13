<template>
  <div class="order-first">
    <q-btn
      @click.stop=""
      flat
      round
      dense
      color="primary"
      icon="edit"
      class="q-mr-sm"
    />
    <q-btn
      @click.stop="handleDelete(alertId)"
      flat
      round
      dense
      color="red"
      icon="delete"
    />
  </div>
</template>

<script>
export default {
  props: ["alertId"],
  methods: {
    handleDelete(id) {
      this.$emit("handleDelete", id);
    },
  },
};
</script>

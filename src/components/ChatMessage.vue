<!-- components/ChatMessage.vue -->
<template>
  <div :class="['message', isSelf ? 'self' : 'other']">
    <q-chip
      :color="isSelf ? 'primary' : 'secondary'"
      text-color="white"
      class="text-body2"
    >
      {{ sender }}：{{ text }}
    </q-chip>
  </div>
</template>

<script setup>
defineProps({
  sender: String,
  text: String,
  isSelf: Boolean,
});
</script>

<style scoped>
.message {
  margin: 4px 0;
}
.self {
  display: flex;
  justify-content: flex-end;
}
.other {
  display: flex;
  justify-content: flex-start;
}
</style>

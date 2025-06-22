<!-- components/RoomCard.vue -->
<template>
  <q-card class="my-card" @click="enter">
    <q-card-section>
      <div class="text-h6">{{ roomName }}</div>
      <div class="text-subtitle2 text-grey">點擊進入房間</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
 
const props = defineProps({
  roomName: String,
});

const emit = defineEmits(["enter-room"]);

const enter = () => {
  emit("enter-room", props.roomName);
};
</script>

<style scoped>
.my-card {
  cursor: pointer;
  transition: transform 0.2s ease;
}
.my-card:hover {
  transform: scale(1.03);
}
</style>

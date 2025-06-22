<template>
  <q-page class="q-pa-md flex flex-center column">
    <h2 class="text-h5 q-mb-md">請選擇一個房間進入</h2>

    <q-btn
      push
      color="white"
      text-color="primary"
      label="Create Room"
      @click="handleCreateGameRoom()"
    />

    <div class="q-gutter-md">
      <RoomCard room-name="房間 1" @enter-room="enterRoom" />
      <RoomCard room-name="房間 2" @enter-room="enterRoom" />
    </div>
  </q-page>
</template>

<script setup>
import RoomCard from "../components/RoomCard.vue";
import { useRouter } from "vue-router";
import { createGameRoom } from "../api/GameRoomApi";

const router = useRouter();

// 使用者選擇進入房間
const enterRoom = (roomName) => {
  // 你可以將 roomName 存起來或帶入 query 進去聊天室頁
  router.push({ path: "/chat", query: { room: roomName } });
};

const handleCreateGameRoom = () => {
  try {
    const newRoom = await createGameRoom();
    console.log(newRoom)
  } catch (e) {
    console.log(e);
  }
};
</script>

<style scoped>
.q-gutter-md {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

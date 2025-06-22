<template>
  <q-page class="q-pa-md column">
    <div class="col scroll q-pa-sm bg-grey-2" style="max-height: 70vh">
      <ChatMessage
        v-for="(msg, index) in messages"
        :key="index"
        :sender="msg.sender"
        :text="msg.text"
        :isSelf="msg.isSelf"
      />
    </div>

    <div class="row q-mt-md">
      <q-input
        v-model="inputMessage"
        label="輸入訊息"
        class="col"
        @keyup.enter="sendMessage()"
        dense
        outlined
      />
      <q-btn
        label="送出"
        color="primary"
        class="q-ml-sm"
        @click="sendMessage()"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import connection from "../signalr";
import ChatMessage from "../components/ChatMessage.vue";

// 模擬一則其他人發的訊息
const messages = ref([
  { sender: "System", text: "Welcome here!!!", isSelf: false },
]);

// 使用者暱稱（localStorage帶入）
const userName = localStorage.getItem("name");
const inputMessage = ref("");

const sendMessage = () => {
  if (inputMessage.value.trim() === "") return;

  // 呼叫後端 Hub 的 SendMessage 方法
  connection
    .invoke("SendMessage", userName, inputMessage.value)
    .catch((err) => console.error("送出失敗：", err));

  inputMessage.value = "";
};

// 連接 SignalR 並註冊接收訊息事件
onMounted(async () => {
  await connection.start();

  connection.on("ReceiveMessage", (sender, message) => {
    messages.value.push({
      sender,
      text: message,
      isSelf: sender === userName,
    });
  });
});
</script>

<style scoped>
.scroll {
  overflow-y: auto;
}
</style>

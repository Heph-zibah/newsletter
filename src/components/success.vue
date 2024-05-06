<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const subscribedEmail = route.params.email;
</script>

<template>
  <main class="bg-white max-w-sm rounded-xl text-darkSlateGrey ">
    <section class="p-5  text-sm pt-32 md:pt-5 flex flex-col justify-between gap-52 md:gap-10">
      <div class="space-y-5">
        <img src="../assets/images/icon-success.svg" alt="success icon">
      <h1 class="text-4xl font-bold "> Thanks for subscribing!</h1>
      <p> A confirmation email has been sent to <strong>{{subscribedEmail}}</strong>. Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <div>
        <RouterLink to="/"><button class=" bg-darkSlateGrey text-center py-2 text-white rounded hover:bg-tomato hover:drop-shadow-2xl hover:shadow-2xl transition duration-500 ease-in-out w-full">Dismiss message</button></RouterLink>
        
        
        
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>

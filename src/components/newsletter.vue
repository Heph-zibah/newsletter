<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const isValidEmail = ref(false);
const showError = ref(false);
const submitting = ref(false);
const router = useRouter();

watch(email, (newValue) => {
  if (newValue.trim() === '') {
    showError.value = false;
    isValidEmail.value = false;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValidEmail.value = emailRegex.test(newValue);
    showError.value = !isValidEmail.value;
  }
});

function submitForm() {
  if (!email.value.trim()) {
    showError.value = true;
    return;
  }
  if (!isValidEmail.value) {
    showError.value = true;
    return;
  }
  submitting.value = true;

  setTimeout(() => {
    submitting.value = false;
     router.push(`/success/${email.value}`);
  }, 1000);
}

</script>

<template>
  <main class="bg-white max-w-2xl rounded-xl text-darkSlateGrey">
    <section class="md:py-5  md:flex flex-col-reverse md:flex-row-reverse items-center">
      <div class="md:h-96 md:w-96 ">
        <img src="../assets/images/illustration-sign-up-desktop.svg" alt="image mockup" class="h-full w-full hidden md:block ">
        <img src="../assets/images/illustration-sign-up-mobile.svg" alt="image mockup" class="h-full w-full md:hidden">
      </div>
      <div class="md:px-6 text-sm py-5 md:py-0 px-7 ">
        <h1 class="text-4xl font-bold ">Stay updated!</h1>
        <p class=" my-4">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul class=" space-y-4">
          <span class="flex items-center gap-x-3">
            <img src="../assets/images/icon-list.svg" alt="list icon">
            <li class="-mb-3">Product discovery and building what matters</li>
          </span>
          <span  class="flex items-center gap-x-3">
            <img src="../assets/images/icon-list.svg" alt="list icon">
            <li>Measuring to ensure updates are a success</li>
          </span>
          <span class="flex items-center gap-x-3">
            <img src="../assets/images/icon-list.svg" alt="list icon">
            <li>And much more!</li>
          </span>
          
        </ul>
        <form action="" class="flex flex-col mt-4" @submit.prevent="submitForm">
          <span class="flex justify-between items-center"><label for="email" class="font-bold">Email address</label> <pre class="text-tomato font-bold" v-if="showError">Valid email required</pre></span>
          <input v-model="email" type="email" placeholder="email@company.com" class="border border-grey rounded p-2 placeholder:text-grey my-4 outline-none focus:outline-none caret-grey">
          
          <button type="submit" :disabled="!isValidEmail || submitting" class="bg-darkSlateGrey text-center py-2 text-white rounded hover:bg-tomato hover:drop-shadow-2xl hover:shadow-2xl transition duration-500 ease-in-out">
      {{ submitting ? 'Submitting...' : 'Subscribe to monthly newsletter' }}
    </button>
    <span v-if="!email && showError" class="text-tomato font-bold">Please add your email.</span>
        </form>
      </div>
      
    </section>
<footer class="text-center text-darkSlateGrey text-sm pb-5">
      <p>Challenge by <a href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv" class="text-tomato">Frontend Mentor</a>. Coded by <a href="https://www.frontendmentor.io/profile/Heph-zibah" class="text-tomato">oadaramola</a>.</p>
    </footer>
  </main>
  
</template>

<style scoped>
</style>


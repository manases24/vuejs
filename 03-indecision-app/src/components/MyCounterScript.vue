<template>
  <section>
    <h2>My Counter Script</h2>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square:{{ squareCounter }}</h3>

    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCounter } from '../composables/useCounter'
const { counter, squareCounter, increment, decrement } = useCounter()
</script>

<template>
  <div>
    Nuxt module playground!
    <SelectComponent />
  </div>
</template>

<script setup>
const { data: departure, error } = await useFetch('/api/reservation/departure', {
  method: 'GET'
});

console.log('api/reservasi/departure', JSON.parse(departure.value), error.value);
</script>

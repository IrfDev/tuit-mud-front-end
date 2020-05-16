<template>
  <div class="results container-fluid pt-3">
    <div class="col">
      <personal-card/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import fetch from 'node-fetch'
import PersonalCard from '@/components/molecules/results/PersonalCard';

export default {
  name: 'Resultados',
  components: {
    PersonalCard,
  },
  async created() {
    const user = await axios.get('http://localhost:8080/auth/login/success')
  },
  data() {
    return {
      username: '',
      user: {}
    }
  }
};
</script>

<style lang="scss">
.results {
  min-height: 100vh;
}
</style>
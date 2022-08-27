<script>
import MissionObject from '../components/MissionObject.vue'
import dataset from '../assets/data/mars-missions.json'

export default {
  data() {
    return {
      dataset
    }
  },
  components: {
    MissionObject
  },
  computed: {
    operationalObjects() {
      return this.dataset.filter(object => object.Outcome.text === 'Operational')
    }
  }
}
</script>

<template>
<section class="count">
  <div id="summary">

    
    <h2>{{ operationalObjects.length }}</h2>
    <span>operational robots are at Mars today</span>
    <p>(still no humans)</p>
  </div>
</section>
<section class="infopanel">
  <MissionObject
    class="item"
    v-for="object in operationalObjects"
    :data="object"
  />
</section>
</template>

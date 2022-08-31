<script>
import MissionObject from './components/MissionObject.vue'
import TheSummary from './components/TheSummary.vue'

import dataset from './assets/data/mars-missions.json'

export default {
  data() {
    return {
      dataset
    }
  },
  components: {
    MissionObject,
    TheSummary
  },
  computed: {
    filteredData() {
      console.log(this.dataset)
      return this.dataset.filter(object => object.Outcome.text === 'Operational')
    }
  }
}
</script>

<template>
  <header>
    <TheSummary :data="filteredData.length" />
  </header>
  <main>
    <section class="timeline">
      <div class="line">
      </div>
      <ul>
        <MissionObject class="item" v-for="object in dataset" :data="object" />
      </ul>
    </section>
  </main>
</template>

<style scoped lang="scss">
.timeline {
  position: relative;
  margin: 3.2rem 0 0 0;

  .line {
    position: absolute;
    left: 50%;
    top: 1rem;
    bottom: 1rem;
    display: block;
    background-color: var(--color-border);
    // height: 100%;
    width: 1px;
  }

  >ul {
    margin: 0;
    padding: 0;
  }
}
</style>

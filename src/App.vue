<script>
import DataWrapper from './components/DataWrapper.vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

// import dataset from './assets/data/mars-missions.json'

export default {
  setup() {
    const { result, loading, error } = useQuery(gql`
    query getSpacecraft {
      wikipedia {
        LaunchDate {
          text
        }
        MissionType {
          text
        }
        Operator {
          text
        }
        Outcome {
          text
        }
        Spacecraft {
          text
        }
        _id
      }
    }
  `)

    return {
      result,
      loading,
      error
    }
  },
  components: {
    DataWrapper
  }
}
</script>

<template>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{  error.message  }}</div>

  <div v-else-if="result && result.wikipedia">
    <!-- {{  result  }} -->
    <Suspense>
      <DataWrapper :data="result.wikipedia" />
    </Suspense>
  </div>
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

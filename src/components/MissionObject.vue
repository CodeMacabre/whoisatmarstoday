<script>
export default {
  props: {
    data: {
      required: true
    }
  },
  computed: {
    parsedOperator() {
      const operator = this.data.Operator.text.split(' ')
      return operator[0].replace('/', ' / ')
    }
  }
}
</script>

<template>
  <li class='details' v-if="data.Outcome.text !== 'Operational'">
    <!-- <p> {{  data.Spacecraft.text  }}: {{  data.Outcome.text  }}</p> -->
  </li>
  <li v-else class="details">
    <h3>
      {{  data.Spacecraft.text  }}
    </h3>
    <ul>
      <li>Type: {{  data.MissionType.text  }}</li>
      <li>Operator: {{  parsedOperator  }}</li>
      <li>Launched: {{  data.LaunchDate.text  }}</li>
    </ul>
  </li>
</template>

<style scoped lang="scss">
.details {
  list-style: none;
  margin: 1rem auto;
  padding: 1rem;
  display: block;
  background-color: var(--color-background-soft);
  border: 1px var(--color-border) solid;

  h3 {
    text-align: center;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>

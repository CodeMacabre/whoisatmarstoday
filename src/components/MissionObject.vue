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
    <p><strong>{{  data.Spacecraft.text  }}</strong>
      <span v-if="data.Outcome.text.toLowerCase().includes('fail')">
        ❌ {{  data.Outcome.text  }}
      </span>
      <span v-else-if="data.Outcome.text.toLowerCase().includes('success')">
        ✔️ {{  data.Outcome.text  }} (mission complete)
      </span>
      <span v-else>
        {{  data.Outcome.text  }}
      </span>
    </p>
  </li>
  <li v-else class="details">
    <h3>
      {{  data.Spacecraft.text  }}
    </h3>
    <ul>
      <li>Status: {{  data.Outcome.text  }}</li>
      <li>Type: {{  data['Mission Type'].text  }}</li>
      <li>Operator: {{  parsedOperator  }}</li>
      <li>Launched: {{  data['Launch Date'].text  }}</li>
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

  strong {
    font-weight: 700;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>

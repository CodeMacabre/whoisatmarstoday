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
  <li class="details">
    <h3>
      {{ data.Mission.text }}
    </h3>
    <ul>
      <li>Type: {{ data['Mission Type'].text }}</li>
      <li>Operator: {{ parsedOperator }}</li>
      <li>Launched: {{ data['Launch Date'].text }}</li>
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

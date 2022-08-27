<template>
  <div class="details">
    <h3>
      {{ data.Mission.text }}
    </h3>
    <ul>
      <li>Type: {{ data['Mission Type'].text }}</li>
      <li>Origin: {{ data.Operator.text }}</li>
      <li>Launch: {{ data['Launch Date'].text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true
    }
  }
}
</script>

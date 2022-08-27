<script>
import TheHeader from './components/TheHeader.vue'
import TheSummary from './components/TheSummary.vue'

export default {
  components: {
    TheHeader,
    TheSummary
}
}
</script>

<template>
<div>
  <header>
      <TheHeader msg="Who Is At Mars Today?" />
  </header>
  <div>
    <TheSummary />
  </div>
</div>
</template>

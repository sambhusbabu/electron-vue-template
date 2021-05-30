<template>
  <div class="about">
    <EmptyStateBasic label="Create your first project" description="Creating project, you'll be able to upload your design and collaborate with people."/>
  </div>
</template>
<script>
// @ is an alias to /src
import EmptyStateBasic from '@/components/EmptyPage.vue'

export default {
  name: 'Home',
  components: {
    EmptyStateBasic
  }
}
</script>

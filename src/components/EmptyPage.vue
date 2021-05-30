<template>
  <div>
    <md-empty-state
      md-icon="devices_other"
      :md-label="label"
      :md-description="description"
    >
      <md-button class="md-primary md-raised">Create first project</md-button>
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: 'EmptyStateBasic',
  props: {
    label: String,
    description: String
  }
}
</script>

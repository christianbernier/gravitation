<script lang="ts">
  export let showTitle: boolean = true;
  export let sectionTitle: string;
</script>

<div class="settings-header">
  {#if showTitle}
    <h2>{sectionTitle}</h2>
  {/if}
  <slot name="header-override" />
  <slot name="header-extra" />
</div>
<div class="container">
  <div class="form-area">
    <slot name="form" />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .form-area {
    margin-left: var(--margin-xl);
  }

  .settings-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--margin-md);
    margin-bottom: var(--margin-sm);
  }
</style>
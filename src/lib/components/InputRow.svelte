<script lang="ts">
  export let sideBySide: boolean = false;
</script>

<div class={sideBySide ? 'side-by-side' : ''}>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--margin-sm);
    margin: var(--margin-lg) 0;
  }

  .side-by-side {
    flex-direction: row;
  }
</style>

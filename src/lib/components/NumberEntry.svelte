<script lang="ts">
  export let value: number;
  export let placeholder: string = '';
</script>

<input
  type="number"
  step={0.1}
  bind:value={value}
  {placeholder}
>

<style>
  input {
    width: 6ch;
  }
</style>

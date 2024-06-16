<script lang="ts">
	import type { Sphere } from "$lib/sphere";
	import InputRow from "./InputRow.svelte";
	import NumberEntry from "./NumberEntry.svelte";
	import SettingsForm from "./SettingsForm.svelte";
	import VectorEntry from "./VectorEntry.svelte";

  export let name: string;
  export let sphere: Sphere;
  export let onRemove: () => void;

  let open = false;
</script>

<SettingsForm showTitle={false} sectionTitle={name}>
  <div slot="header-override">
    <div class="sphere-color" style={`background: ${sphere.color}`}/>
    <h3>{name}</h3>
  </div>
  <div slot="header-extra">
    {#if open}
      <button on:click={() => onRemove()}>Remove</button>
    {/if}
    <button on:click={() => open = !open}>{open ? 'Close' : 'Edit'}</button>
  </div>
  <div slot="form">
    {#if open}
      <InputRow>
        <span>Mass</span>
        <NumberEntry bind:value={sphere.mass} />
      </InputRow>
      <InputRow>
        <span>Radius</span>
        <NumberEntry bind:value={sphere.radius} />
      </InputRow>
      <InputRow>
        <span>Initial acceleration</span>
        <VectorEntry bind:vector={sphere.acceleration}/>
      </InputRow>
      <InputRow>
        <span>Initial velocity</span>
        <VectorEntry bind:vector={sphere.velocity}/>
      </InputRow>
      <InputRow>
        <span>Initial position</span>
        <VectorEntry bind:vector={sphere.position}/>
      </InputRow>
      <InputRow>
        <span>Color</span>
        <input type="color" bind:value={sphere.color}>
      </InputRow>
    {/if}
  </div>
</SettingsForm>

<style>
  div[slot="header-override"] {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--margin-md);
  }

  .sphere-color {
    height: var(--margin-lg);
    width: var(--margin-lg);
    border-radius: var(--margin-lg);
  }
</style>

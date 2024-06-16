<script lang="ts">
	import { getNewSphere, type Sphere } from "$lib/sphere";
	import SettingsForm from "./SettingsForm.svelte";
	import SphereEntry from "./SphereEntry.svelte";

  export let spheres: Array<Sphere>;

  const addSphere = () => {
    spheres = [
      ...spheres,
      getNewSphere(),
    ]
  }

  const removeSphere = (index: number) => {
    spheres.splice(index, 1)
    spheres = [...spheres]
  }
</script>

<SettingsForm sectionTitle="Spheres">
  <div slot="header-extra">
    <button on:click={() => addSphere()}>+</button>
  </div>
  <div slot="form">
    {#if spheres.length === 0}
      <p>No spheres</p>
    {/if}
    {#each spheres as sphere, index}
      <SphereEntry
        {sphere}
        name={`Sphere ${index + 1}`}
        onRemove={() => removeSphere(index)}
      />
    {/each}
  </div>
</SettingsForm>

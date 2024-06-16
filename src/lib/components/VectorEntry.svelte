<script lang="ts">
	import type { Vec3 } from "$lib/vec3";
	import NumberEntry from "./NumberEntry.svelte";

  export let vector: Vec3;
</script>

<div>
  <span>(</span>
    <NumberEntry bind:value={vector.x} placeholder="x"/>
    <span>,</span>
    <NumberEntry bind:value={vector.y} placeholder="y"/>
    <span>,</span>
    <NumberEntry bind:value={vector.z} placeholder="z"/>
  <span>)</span>
</div>

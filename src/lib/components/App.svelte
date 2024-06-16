<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
	import type { Sphere } from '$lib/sphere';
	import type { Environment } from '$lib/environment';

  export let spheres: Array<Sphere>;
  export let environmentSettings: Environment;

</script>

<Canvas>
  <Scene {spheres} {environmentSettings} />
</Canvas>

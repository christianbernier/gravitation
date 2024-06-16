<script lang="ts">
	import { type Sphere, DefaultSpheres, DefaultEnvironment } from '$lib';
  import App from '$lib/components/App.svelte'
	import EnvironmentSettings from '$lib/components/EnvironmentSettings.svelte';
	import SphereSettings from '$lib/components/SphereSettings.svelte';
	import { onMount } from 'svelte';

  let activeSpheres: Array<Sphere> = [];
  let formSpheres: Array<Sphere> = JSON.parse(JSON.stringify(DefaultSpheres));
  let environmentSettings = DefaultEnvironment;

  const setSpheres = () => {
    activeSpheres = JSON.parse(JSON.stringify(formSpheres));
  }

  onMount(() => setSpheres());

</script>

<div id="container">
  <div id="scene">
    <App spheres={activeSpheres} {environmentSettings} />
  </div>
  <div id="info">
    <h1>Gravitation</h1>
    <p>
      <br>
      This is a simulation of multi-body gravitation. Use left-click to tilt/pan the camera, right-click to move, and scroll to zoom.
      <a href="/about">Learn more</a>
    </p>

    <EnvironmentSettings bind:settings={environmentSettings}/>
    <SphereSettings bind:spheres={formSpheres}/>

    <button id="go-button" on:click={setSpheres}>Go!</button>
  </div>
</div>

<style>
  #container {
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  #scene {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }

  #info {
    position: absolute;
    max-width: 40ch;
    height: calc(100vh - 2 * 1rem);
    overflow-y: auto;
    background: linear-gradient(90deg, var(--dark) 40%, transparent 100%);
    padding: 1rem 2rem;
  }

  #go-button {
    margin-top: var(--margin-xl);
  }
</style>

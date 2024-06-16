<script lang="ts">
	import type { Environment } from '$lib/environment';
	import type { Sphere } from '$lib/sphere';
	import { vec3Add, vec3DivideScalar, vec3Magnitude, vec3MultiplyScalar, vec3Subtract } from '$lib/vec3';
  import { T, useTask } from '@threlte/core'
  import { Grid, MeshLineGeometry, MeshLineMaterial, OrbitControls, Stars } from '@threlte/extras'
	import { CatmullRomCurve3, SphereGeometry, Vector3 } from 'three';

  export let spheres: Array<Sphere>;
  export let environmentSettings: Environment;

  const strength = 10;

  useTask((delta) => {
    for (let i = 0; i < spheres.length; i++) {
      spheres[i].netForce = { x: 0, y: 0, z: 0 }

      for (let j = 0; j < spheres.length; j++) {
        if (i === j) {
          continue;
        }

        const separation = vec3Subtract(spheres[j].position, spheres[i].position);

        spheres[i].netForce = vec3Add(
          spheres[i].netForce,
          vec3MultiplyScalar(
            separation,
            strength * spheres[i].mass * spheres[j].mass / Math.pow(vec3Magnitude(separation), 3)
          )
        )
      }
    }
    
    for (let i = 0; i < spheres.length; i++) {
      spheres[i].positionHistory.push(spheres[i].position)

      spheres[i].acceleration = vec3DivideScalar(spheres[i].netForce, spheres[i].mass)
      spheres[i].velocity = vec3Add(spheres[i].velocity, vec3MultiplyScalar(spheres[i].acceleration, delta))
      spheres[i].position = vec3Add(spheres[i].position, vec3MultiplyScalar(spheres[i].velocity, delta))
    }
  })
</script>

<T.PerspectiveCamera
  makeDefault
  position={[-20, 20, 20]}
  fov={15}
  zoom={0.3}
>
  <OrbitControls
    autoRotate
    enableZoom={true}
    enableDamping
    autoRotateSpeed={0.5}
    target.y={1.5}
  />
</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={0.8}
  position.x={5}
  position.y={10}
/>
<T.AmbientLight intensity={1} />

{#if environmentSettings.stars}
  <Stars />
{/if}

{#if environmentSettings.grid}
  <Grid
    position.y={-0.001}
    cellColor="#ffffff"
    sectionColor="#ffffff"
    sectionThickness={0}
    fadeDistance={100}
    cellSize={1}
    infiniteGrid={true}
  />
{/if}

{#each spheres as sphere}
  <T.Mesh
    position={[
      sphere.position.x,
      sphere.position.y,
      sphere.position.z
    ]}
    
  >
    <T is={SphereGeometry} args={[sphere.radius / 3]}></T>
    <T.MeshStandardMaterial
      color={sphere.color}
      roughness={0.4}
      metalness={0.3}
    />
  </T.Mesh> 

  {#if sphere.positionHistory.length > 5}
    <T.Mesh>
      <MeshLineGeometry
        points={new CatmullRomCurve3(sphere.positionHistory.slice(-1000).map(
          (vec) => new Vector3(vec.x, vec.y, vec.z)
        )).getPoints(1000)}
        shape='custom' 
        shapeFunction={(p) => p}
      />
      <MeshLineMaterial color={sphere.color} width={0.1}/>
    </T.Mesh>
    <T.AmbientLight
      intensity={5}
      location={[sphere.position.x, sphere.position.y, sphere.position.z]}
      color={sphere.color}
    />
  {/if}
{/each}

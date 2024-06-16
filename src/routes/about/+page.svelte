<div id="container">
  <div id="contents">
    <h1>Gravitation</h1>
    <a href="/">Back</a>
    
    <h2>What is this?</h2>
    <p>
      This is a simulation of 3D gravitation, such as that between planets and stars. It is a visualization of the chaotic nature of seemingly simple initial conditions. Slight variations in the positions or velocities of any sphere will result in vastly different outcomes. This phenomenon is known as the <a href="https://en.wikipedia.org/wiki/Three-body_problem" class="inline">three-body problem</a>.
    </p>

    <h2>Who made this site?</h2>
    <p>
      Hi! My name is <a href="https://cbernier.com" class="inline">Christian Bernier</a>. I'm a CS/physics student. This is a fun weekend project to experiment with 3D graphics and WebGL specifically.
    </p>

  </div>
</div>

<style>
  #container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: var(--margin-xl) 0;
  }

  #contents {
    justify-self: center;
    max-width: 80ch;
  }

  h2:not(:first-of-type) {
    margin-top: var(--margin-xl);
  }

  a.inline {
    display: inline-block;
    margin: 0;
  }
</style>
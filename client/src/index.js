import './index.css';

import * as Babylon from 'babylonjs';
import createScene from 'simulation/ballSphere';

const canvas = document.getElementById('game'); // eslint-disable-line no-undef
const engine = new Babylon.Engine(canvas, true);
const scene = createScene(canvas, engine);

engine.runRenderLoop(() => {
  scene.render();
});

// Resize the engine on window resize
window.addEventListener('resize', () => { // eslint-disable-line no-undef
  engine.resize();
});

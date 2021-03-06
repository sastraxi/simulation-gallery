import * as Babylon from 'babylonjs';
import { Vec3 } from '../util';

export default (canvas, engine) => {
  // This creates a basic Babylon Scene object (non-mesh)
  const scene = new Babylon.Scene(engine);

  // This creates and positions a free camera (non-mesh)
  const camera = new Babylon.FreeCamera('camera1', new Vec3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vec3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new Babylon.HemisphericLight('light1', new Vec3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.1;

  // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
  const sphere = Babylon.Mesh.CreateSphere('sphere1', 16, 2, scene);

  // Move the sphere upward 1/2 its height
  sphere.position.y = 1;

  // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
  const ground = Babylon.Mesh.CreateGround('ground1', 6, 6, 2, scene); // eslint-disable-line no-unused-vars

  return scene;
};

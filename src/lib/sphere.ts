import { randomNumberBetween } from "./random";
import type { Vec3 } from "./vec3";

export type Sphere = {
  mass: number;
  radius: number;
  color: string;
  netForce: Vec3;
  acceleration: Vec3;
  velocity: Vec3;
  position: Vec3;
  positionHistory: Array<Vec3>;
}

export const DefaultSpheres: Array<Sphere> = [
  {
    mass: 5,
    radius: 0.5,
    color: '#0E79B2',
    netForce: { x: 0, y: 0, z: 0 },
    acceleration: { x: 0, y: 0, z: 0 },
    velocity: { x: 2, y: -0.8, z: 1 },
    position: { x: 7, y: 0, z: 0 },
    positionHistory: [],
  },
  {
    mass: 10.3,
    radius: 0.5,
    color: '#F39237',
    netForce: { x: 0, y: 0, z: 0 },
    acceleration: { x: 0, y: 0, z: 0 },
    velocity: { x: -1, y: -1, z: -1 },
    position: { x: -3, y: 5, z: 10 },
    positionHistory: [],
  },
  {
    mass: 20,
    radius: 0.7,
    color: '#BF1363',
    netForce: { x: 0, y: 0, z: 0 },
    acceleration: { x: 0, y: 0, z: 0 },
    velocity: { x: 0, y: 0.9, z: 0 },
    position: { x: 0, y: -3, z: -4 },
    positionHistory: [],
  },
]

export const getNewSphere = (): Sphere => ({
  mass: randomNumberBetween(0.2, 2.4),
  radius: randomNumberBetween(0.2, 1),
  color: '#ffffff',
  netForce: { x: 0, y: 0, z: 0 },
  acceleration: { x: 0, y: 0, z: 0 },
  velocity: {
    x: randomNumberBetween(-2, 2),
    y: randomNumberBetween(-2, 2),
    z: randomNumberBetween(-2, 2)
  },
  position: {
    x: randomNumberBetween(-2, 2),
    y: randomNumberBetween(-2, 2),
    z: randomNumberBetween(-2, 2)
  },
  positionHistory: [],
})

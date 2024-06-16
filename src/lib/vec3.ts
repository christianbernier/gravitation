export type Vec3 = {
  x: number;
  y: number;
  z: number;
}

export const vec3Add = (addend1: Vec3, addend2: Vec3): Vec3 => ({
  x: addend1.x + addend2.x,
  y: addend1.y + addend2.y,
  z: addend1.z + addend2.z,
})

export const vec3Subtract = (minuend: Vec3, subtrahend: Vec3): Vec3 =>
  vec3Add(minuend, vec3MultiplyScalar(subtrahend, -1))

export const vec3MultiplyScalar = (vector: Vec3, scalar: number): Vec3 => ({
  x: vector.x * scalar,
  y: vector.y * scalar,
  z: vector.z * scalar,
})

export const vec3DivideScalar = (vector: Vec3, scalar: number): Vec3 => {
  if (scalar === 0) {
    throw new Error('Cannot divide by 0.')
  }
  return vec3MultiplyScalar(vector, 1 / scalar);
}

export const vec3Magnitude = (vector: Vec3): number => Math.sqrt(
  vector.x * vector.x +
  vector.y * vector.y +
  vector.z * vector.z
)

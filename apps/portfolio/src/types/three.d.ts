declare global {
  namespace THREE {
    interface Object3D {
      leftArm?: THREE.Mesh;
      rightArm?: THREE.Mesh;
      leftLeg?: THREE.Mesh;
      rightLeg?: THREE.Mesh;
    }
  }
}

export interface CharacterAnimations {
  walking: boolean;
  direction: number;
  speed: number;
}

export interface EnvironmentSection {
  name: string;
  color: number;
  technologies: string[];
  description: string;
}

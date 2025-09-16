export interface NeoObject {
  id: string;
  name: string;
  size: number;
  velocity: string;
  distance: string;
}

export interface NASAResponse {
  near_earth_objects: Record<string, NasaNeo[]>;
}

export interface NasaNeo {
  id: string;
  name: string;
  estimated_diameter: {
    meters: {
      estimated_diameter_max: number;
    };
  };
  close_approach_data: Array<{
    relative_velocity: {
      kilometers_per_hour: string;
    };
    miss_distance: {
      kilometers: string;
    };
  }>;
}

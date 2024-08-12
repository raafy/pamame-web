declare module "maxmind" {
  interface CityResponse {
    country?: {
      names?: {
        en?: string;
      };
    };
    subdivisions?: {
      names?: {
        en?: string;
      };
    }[];
    city?: {
      names?: {
        en?: string;
      };
    };
  }

  class Reader<T> {
    constructor(buffer: Buffer);
    get(ip: string): T | null;
    close(): void;
  }

  function open(filepath: string): Promise<Reader<CityResponse>>;
}

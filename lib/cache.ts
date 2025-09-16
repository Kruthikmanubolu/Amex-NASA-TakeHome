type CacheEntry<T> = {
  data: T;
  expiry: number;
};

const cache: Record<string, CacheEntry<unknown>> = {};

const DEFAULT_TTL = 1000 * 60 * 10; // 10 minutes

export function setCache<T>(
  key: string,
  data: T,
  ttl: number = DEFAULT_TTL,
): void {
  const entry: CacheEntry<T> = {
    data,
    expiry: Date.now() + ttl,
  };
  cache[key] = entry;
}

export function getCache<T>(key: string): T | null {
  const entry = cache[key] as CacheEntry<T> | undefined;
  if (!entry) return null;
  if (Date.now() > entry.expiry) {
    delete cache[key];
    return null;
  }
  return entry.data;
}

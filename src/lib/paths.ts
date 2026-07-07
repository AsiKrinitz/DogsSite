// GitHub Pages serves this site under /DogsSite/, so any asset referenced by
// a plain string (not a build-time import) needs that base prefixed manually.
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

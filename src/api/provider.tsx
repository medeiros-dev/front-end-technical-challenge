/* istanbul ignore file */
export function getURL(): string {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  throw new Error("URL not provide in environment file");
}

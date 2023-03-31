export function makeQueryString<T extends string | number>(
  params: Record<string, T | undefined>,
): string {
  return Object.entries(params)
    .filter((pair): pair is [string, T] => pair[1] !== undefined)
    .map(([key, value], index) => {
      return `${index === 0 ? '?' : ''}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join('&');
}

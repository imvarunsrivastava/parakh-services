export function capitalizeWords(str: string): string {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '')  // Remove non-word chars (except hyphens)
    .replace(/--+/g, '-')     // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '')       // Remove leading hyphens
    .replace(/-+$/, '');      // Remove trailing hyphens
}
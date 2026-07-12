// Lazily import every MDX post. Vite turns each .mdx file into a module whose
// default export is a React component. We key them by slug (the filename).

const modules = import.meta.glob('./posts/*.mdx')

const postLoaders = Object.fromEntries(
  Object.entries(modules).map(([path, loader]) => {
    const slug = path.replace(/^\.\/posts\//, '').replace(/\.mdx$/, '')
    return [slug, loader]
  }),
)

export function getPostLoader(slug) {
  return postLoaders[slug] ?? null
}

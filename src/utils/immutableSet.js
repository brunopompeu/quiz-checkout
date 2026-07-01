export function setPath(obj, path, value) {
  if (path.length === 0) return value
  const [key, ...rest] = path
  if (Array.isArray(obj)) {
    const copy = [...obj]
    copy[key] = setPath(copy[key] ?? {}, rest, value)
    return copy
  }
  return { ...obj, [key]: setPath(obj[key] ?? {}, rest, value) }
}

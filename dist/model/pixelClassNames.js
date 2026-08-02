export function pixelClassNames(...names) {
    return names.filter((name) => Boolean(name && name.trim())).join(" ");
}

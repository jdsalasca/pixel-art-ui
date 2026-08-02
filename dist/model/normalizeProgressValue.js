export function normalizeProgressValue(value) {
    if (!Number.isFinite(value))
        return 0;
    return Math.max(0, Math.min(100, value));
}

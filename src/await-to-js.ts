export function tryTo<T, U = Error>(fn: () => T): [U, undefined] | [null, T] {
  try {
    const result = fn();
    return [null, result];
  } catch (err) {
    return [err as U, undefined];
  }
}

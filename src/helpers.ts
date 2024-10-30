export function throwErrorIfNotDev() {
    if (process.env.NODE_ENV !== 'development') throw Error('Forbidden action');
}

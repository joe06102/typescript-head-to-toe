//keys of object T excluding props that is object type
export type NonObjectPropKeys<T> = { [K in keyof T]: T[K] extends any[] ? K : T[K] extends object ? never : K }[keyof T]

//subtype of T excluding props that is object type
export type NonObjectPicks<T> = Pick<T, NonObjectPropKeys<T>>

//subtype of T only including props that is object type
export type ObjectPicks<T> = Pick<T, Exclude<keyof T, NonObjectPropKeys<T>>>

/**
 * transform intersection to union
 * eg: type A = { a: string, b: number }, type B = { a: string, c: number }
 * type UAB = A | B
 * type IAB = A & B
 * type U2IAB = UnionToIntersection<UAB>
 * U2IAB === IAB //true
 */
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

//get resolved params type of T
export type PromiseResolvedParam<T extends Promise<any>> = T extends Promise<infer P> ? P : null

//n-th param type of func T
export type FuncParam1<T> = T extends (p1: infer P, ...args: any) => any ? P : null
export type FuncParam2<T> = T extends (p1: any, p2: infer P, ...args: any) => any ? P : null
export type FuncParam3<T> = T extends (p1: any, p2: any, p3: infer P, ...args: any) => any ? P : null

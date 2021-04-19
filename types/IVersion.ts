export interface IVersion {
    readonly id: string,
    name: string,
    setColor: (value: string) => void
}

export interface IVersionWithColor extends IVersion{
    color: string,
}

export type VersionsArray = IVersionWithColor[]

// export interface VersionsArray {
//     [index: number]: IVersion
// }

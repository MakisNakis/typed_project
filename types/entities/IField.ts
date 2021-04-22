// import { IService } from "../IService";

// export interface IField extends IService {
export interface IField {
    readonly id: string,
    name: string,
    activeVersions: string[],
    setActiveVersions: (versions: string[]) => void
}

export interface IFieldForActiveVersions extends IField {
    addActiveVersions: (id: string) => void
}

import { action, makeAutoObservable } from 'mobx'
import { genID } from '../../lib'
import { IField } from '../../types/entities/IField'
import { IVersion } from '../../types/entities/IVersion'

export const addActiveVersion = (field: IField, id: string) => {
    field.setActiveVersions([...field.activeVersions, id])
}

export const deleteActiveVersion = (field: IField, id: string) => {
    field.setActiveVersions([...field.activeVersions.filter(activeId => activeId !== id)])
}

class Version implements IVersion {
    id: string = genID()
    name: string = 'new version'
    color: string = 'gray'

    constructor(name: string, color: string = 'gray') {
        this.name = name
        this.color = color
        makeAutoObservable(this)
    }

    @action
    setColor(value: string): void {
        this.color = value
    }
}

export default Version

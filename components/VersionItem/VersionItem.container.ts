import { action, makeAutoObservable } from 'mobx'
import { genID } from '../../lib'
import { IField } from '../../types/entities/IField'
import { IVersion } from '../../types/entities/IVersion'

class Version implements IVersion {
    id = genID()
    name = 'new version'
    color = 'gray'

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

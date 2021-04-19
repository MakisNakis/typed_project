import { action, makeAutoObservable } from 'mobx'
import { IVersion } from '../../types/IVersion'

const genVersionID = () => {
    return `version${new Date().getTime()}${Math.random()}`
}

class Version implements IVersion {
    id: string = genVersionID()
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

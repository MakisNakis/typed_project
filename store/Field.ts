import { action, makeAutoObservable } from 'mobx'
// import { Fetcher, Logger } from "../components/Home/Home.service"
import { genID } from '../lib'
import { IFieldForActiveVersions } from '../types/entities/IField'

let instance: IFieldForActiveVersions = null

export class Field implements IFieldForActiveVersions {
    id = genID()
    name = ''
    activeVersions = []
    // services = {
    //     fetcher: new Fetcher(),
    //     logger: new Logger(),
    // }

    constructor(name: string) {
        if (!instance) {
            instance = this
        }

        this.name = name
        makeAutoObservable(this)
        return instance
    }

    setActiveVersions(versions: string[]): void {
        this.activeVersions = [...versions]
    }

    @action
    addActiveVersion(id: string): void {
        this.setActiveVersions([...this.activeVersions, id])
    }

    @action
    deleteActiveVersion(id: string): void {
        this.setActiveVersions([...this.activeVersions.filter(activeId => activeId !== id)])
    }
    // private async loadActiveVersions() {
    //     // this.activeVersions = await this.services.fetcher('/dsaf').json()
    // }
}

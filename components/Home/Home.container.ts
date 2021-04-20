import { action, makeAutoObservable } from 'mobx'
import { genID } from '../../lib'
import { IField } from '../../types/entities/IField'
import { Fetcher, Logger } from './Home.service'

class Field implements IField {
    id: string = genID()
    name: string = ''
    activeVersions: string[] = []
    services: object = {
        fetcher: new Fetcher(),
        logger: new Logger(),
    }

    constructor(name: string) {
        this.name = name
        makeAutoObservable(this)
    }

    @action
    setActiveVersions(versions: string[]): void {
        this.activeVersions = [...versions]
    }

    private async loadActiveVersions() {
        // this.activeVersions = await this.services.fetcher('/dsaf').json()
    }
}

export default Field

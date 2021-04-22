import { action, makeAutoObservable } from "mobx"
import { userInfo } from "node:os";
// import { Fetcher, Logger } from "../components/Home/Home.service"
import { genID } from "../lib"
import { IField } from "../types/entities/IField"

let instance: IField = null

export class Field implements IField {
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

    @action
    setActiveVersions(versions: string[]): void {
        this.activeVersions = [...versions]
    }

    // private async loadActiveVersions() {
    //     // this.activeVersions = await this.services.fetcher('/dsaf').json()
    // }
}

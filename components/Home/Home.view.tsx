import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { IField } from '../../types/entities/IField'
import { VersionsArray } from '../../types/entities/IVersion'

import Field from './Home.storage'
import Version from '../VersionItem/VersionItem.storage'

import VersionItem from '../VersionItem'

const versions: VersionsArray = [
    new Version('Основная', 'green'),
    new Version('Дополнительная'),
    new Version('Третья'),
    new Version('Критическая', 'red'),
]

const field: IField = new Field('Месторождение')

const getVersionsItems = (versionsData: VersionsArray) =>
    versionsData.map((version) => {
        return <VersionItem key={version.id} version={version} field={field} />
    })

const Home = () => {
    console.log(toJS(field.activeVersions))

    return <div style={{ padding: '1rem', backgroundColor: 'lightcyan' }}>{getVersionsItems(versions)}</div>
}

export default observer(Home)

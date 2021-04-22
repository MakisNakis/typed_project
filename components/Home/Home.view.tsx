import { createContext } from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'

import { IField } from '../../types/entities/IField'
import { VersionsArray } from '../../types/entities/IVersion'

import { Field } from '../../store/Field'

import Version from '../VersionItem/VersionItem.container'
import VersionItem from '../VersionItem'
import FieldInfo from '../FieldInfo'

export const FieldContext = createContext<IField>(null)

const versions: VersionsArray = [
    new Version('Основная', 'green'),
    new Version('Дополнительная'),
    new Version('Третья'),
    new Version('Критическая', 'red'),
]

const field: IField = new Field('Месторождение')
// console.log(field.name)
// const field2: IField = new Field('sihygfsdi')
// console.log(field2.name)
// console.log(field.name)

const Home = () => {
    console.log(toJS(field.activeVersions))

    return (
        <div style={{ width: '100%', padding: '1rem', backgroundColor: 'lightyellow', position: 'relative' }}>
            <div style={{ position: 'absolute', right: 0, top: 0 }}>
                <FieldContext.Provider value={field}>
                    <FieldInfo />
                </FieldContext.Provider>
            </div>
            <div style={{ width: '30%' }}>
                {versions.map((version) => {
                    return <VersionItem key={version.id} version={version} />
                })}
            </div>
        </div>
    )
}

export default observer(Home)

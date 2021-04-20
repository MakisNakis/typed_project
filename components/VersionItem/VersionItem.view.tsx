import { observer } from 'mobx-react'
import { IField } from '../../types/entities/IField'
import { IVersionWithColor } from '../../types/entities/IVersion'

import { addActiveVersion, deleteActiveVersion } from './VersionItem.storage'

interface Props {
    version: IVersionWithColor;
    field: IField;
}

const generateRandomColor = () => {
    const letters: string = '0123456789ABCDEF'
    let color: string = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const VersionItem = ({ version, field }: Props) => {
    const selectActiveVersion = (checked: boolean) => {
        let color: string = 'gray'
        if (checked) {
            color = generateRandomColor()
            addActiveVersion(field, version.id)
        } else {
            deleteActiveVersion(field, version.id)
        }
        version.setColor(color)
    }

    return (
        <div
            style={{
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                backgroundColor: 'pink',
                marginBottom: '0.5rem',
            }}
        >
            <input
                type="checkbox"
                style={{ marginRight: '0.5rem' }}
                onChange={({ target }) => selectActiveVersion(target.checked)}
            ></input>
            {version.color && (
                <span style={{ backgroundColor: version.color, padding: '0.25rem', marginRight: '0.5rem' }}></span>
            )}
            {/* <span style={{ marginRight: '0.5rem' }}>{version.name}</span> */}
            <span>{version.id}</span>
        </div>
    )
}

export default observer(VersionItem)

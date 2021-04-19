import { observer } from 'mobx-react'
import { IVersionWithColor } from '../../types/IVersion'

interface Props {
    version: IVersionWithColor;
}

const generateRandomColor = () => {
    const letters: string = '0123456789ABCDEF'
    let color: string = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const VersionItem = ({ version }: Props) => {
    const selectActiveVersion = (checked: boolean) => {
        let color: string = 'gray'
        if (checked) {
            color = generateRandomColor()
        }
        console.log(color)
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
            <span>{version.name}</span>
        </div>
    )
}

export default observer(VersionItem)

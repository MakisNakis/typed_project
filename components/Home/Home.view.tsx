import Version from '../VersionItem/VersionItem.storage'

import { VersionsArray } from '../../types/IVersion'
import VersionItem from '../VersionItem'

const versions: VersionsArray = [
    new Version('Основная', 'green'),
    new Version('Дополнительная'),
    new Version('Третья'),
    new Version('Критическая', 'red'),
]

const getVersionsItems = (versionsData: VersionsArray) =>
    versionsData.map((version) => {
        return <VersionItem key={version.id} version={version} />
    })

const Home = () => {
    return <div style={{ padding: '1rem', backgroundColor: 'lightcyan' }}>{getVersionsItems(versions)}</div>
}

export default Home

import { useContext } from 'react'
import { IField } from '../../../types/entities/IField'

import { FieldContext } from '../../Home/Home.view'

const Modal = () => {
    const field: IField = useContext(FieldContext)

    return (
        <div>
            <span>{field.name}</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {field.activeVersions.map((activeId) => (
                    <span key={`v${activeId}`}>{activeId}</span>
                ))}
            </div>
        </div>
    )
}

export default Modal

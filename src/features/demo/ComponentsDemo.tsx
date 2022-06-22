import React from 'react'
import SuperButton from '../../main/ui/common/SuperButton/SuperButton'
import SuperCheckbox from '../../main/ui/common/SuperCheckbox/SuperCheckbox'
import s from './ComponentsDemo.module.css'
import SuperInputText from "../../main/ui/common/SuperInput/SuperInputText";

const ComponentsDemo = () => {
    return (
        <div>
            <div className={s.section}>
                <h2>{"<SuperButton/>"}</h2>
                <div>
                    <div className={s.buttonsCol}>
                        <SuperButton btnStyle="primary">Primary</SuperButton>
                        <SuperButton btnStyle="dark">Dark</SuperButton>
                        <SuperButton btnStyle="success">Success</SuperButton>
                        <SuperButton btnStyle="warning">Warning</SuperButton>
                        <SuperButton btnStyle="danger">Danger</SuperButton>
                    </div>
                    <div className={s.buttonsCol}>
                        <SuperButton btnStyle="outline_primary">Outline Primary</SuperButton>
                        <SuperButton btnStyle="outline_dark">Outline Dark</SuperButton>
                        <SuperButton btnStyle="outline_success">Outline Success</SuperButton>
                        <SuperButton btnStyle="outline_warning">Outline Warning</SuperButton>
                        <SuperButton btnStyle="outline_danger">Outline Danger</SuperButton>
                    </div>
                </div>

                <div className={s.buttonsRow}>
                    <SuperButton btnSize="large">Large</SuperButton>
                    <SuperButton btnSize="medium">Medium</SuperButton>
                    <SuperButton btnSize="small">Small</SuperButton>
                    <SuperButton upperCase>Uppercase</SuperButton>
                </div>

            </div>

            <div className={s.section}>
                <h2>{"<SuperInputText/>"}</h2>
                <SuperInputText placeholder="Basic"/>
                <SuperInputText error="Some error" placeholder="With error"/>
            </div>

            <div className={s.section}>
                <h2>{"<SuperCheckbox/>"}</h2>

                <SuperCheckbox className={s.superCheckboxExample} checked={false}>Unchecked</SuperCheckbox>
                <SuperCheckbox checked={true}>Checked</SuperCheckbox>

            </div>
        </div>
    )
}

export default ComponentsDemo
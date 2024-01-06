import React from 'react'
import Button from '../Button/Button'

import './TabsSection.css'

const TabsSection = ({ active, onChange }) => {
    return (
        <section className='TabsSection'>
            <Button
                isActive={active === 'Home'}
                onClick={() => onChange('Home')}>
                    Home
            </Button>
            <Button
                isActive={active === 'Feedback'}
                onClick={() => onChange('Feedback')}>
                    Feedback
            </Button>
            <Button
                isActive={active === 'Effect'}
                onClick={() => onChange('Effect')}>
                    Effect
            </Button>
        </section>
    )
}

export default TabsSection
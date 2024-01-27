import React from 'react'
import { Link, Route } from 'react-router-dom'
import { ROUTES } from '../../constants/Routes'
import Button from '../Button/Button'

import './TabsSection.css'

const TabsSection = ({ active, onChange }) => {
    return (
        <section className='TabsSection'>
            <nav>
                <Link to={ROUTES.category}>Category</Link>
                <Link to={ROUTES.feedback}>Feedback</Link>
                <Link to={ROUTES.names}>Names of heroes</Link>
            </nav>
        </section>
    )
}

export default TabsSection
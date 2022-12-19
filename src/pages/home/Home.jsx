import React from 'react'
import './home.css'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import { userData } from '../../dummyData'
import WidgetsSmall from '../../components/widgetsSm/WidgetsSmall'
import WidgetsLarge from '../../components/widgetsLg/WidgetsLarge'

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' dataKey='Active User' grid />
            <div className="homeWidgets">
                <WidgetsSmall />
                <WidgetsLarge />
            </div>
        </div>
    )
}

export default Home
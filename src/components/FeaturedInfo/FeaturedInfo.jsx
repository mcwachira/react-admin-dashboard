import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">
                    Revenue
                </span>

                <div className="featuredMoneyContainer">
                    <div className="featuredMoney">
                        $2,415
                    </div>

                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className='featuredIcon ' />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>

                <div className="featuredMoneyContainer">
                    <div className="featuredMoney">
                        $2,415
                    </div>

                    <span className="featuredMoneyRate">
                        +22 <ArrowUpward className='featuredIcon positive' />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">
                    Cost
                </span>

                <div className="featuredMoneyContainer">
                    <div className="featuredMoney">
                        $4,015
                    </div>

                    <span className="featuredMoneyRate">
                        -30 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
        </div>
    )
}

export default FeaturedInfo
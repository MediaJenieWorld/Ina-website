import React from 'react'
import "./style.scss"
import CoverPageImage from '@/Components/CoverPage'
import Button from '@/Components/Button'
import ImageComp from '@/Components/Image'

const Contract_Vehicles_Page = () => {
    return (
        <div className='Contract_Vehicles'>
            <CoverPageImage label='Contract Vehicles' src={"/assets/Ina/card (3).webp"} />
            <div className=" m-l m-r   nav-path text-28">
                <a style={{ color: "#090909", marginRight: ".25rem" }} href="#">Home</a>{" > "}
                <a style={{ color: "#090909", marginLeft: ".25rem" }} href="#">Contract Vehicles</a>
            </div>
            <div className="m-l m-r m-t m-b section-2">
                <h2 className="text-48 text-600">
                    Ina Solutions is part of the following contract vehicles.    </h2>
            </div>
            <div className="collab">
                <div className="card">
                    <h3 className='text-24 text-400'>
                        GSA eLibrary is your one source for the latest GSA contract award information. GSA offers unparalleled acquisition solutions to meet today's acquisition challenges.
                    </h3>
                    <Button className={"text-28 "} label={"Visit Website"} />
                </div>
                <div className="right-side">
                    <ImageComp prefixAssets={false} src={"/assets/Home/GSA.png"} height='177' width='373' />
                </div>
            </div>
            <div className="collab">
                <div className="right-side">
                    <ImageComp prefixAssets={false} src={"/assets/Home/stars.png"} height='177' width='373' />
                </div>
                <div className="card">
                    <h3 className='text-24 text-400'>
                        GSA eLibrary is your one source for the latest GSA contract award information. GSA offers unparalleled acquisition solutions to meet today's acquisition challenges.
                    </h3>
                    <Button className={"text-28 "} label={"Visit Website"} />
                </div>
            </div>
        </div>
    )
}

export default Contract_Vehicles_Page
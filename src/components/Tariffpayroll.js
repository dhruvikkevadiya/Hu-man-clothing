import React from 'react'
import Imageheading from "../components/loans/Imageheading"
import Insurancedropdownpage from './Insurance/Insurancedropdownpage';

export default function Tariffpayroll(props) {
    
    const data = props.banner;
    const content = props.content;

    return (
        <>
            <Imageheading banner={data} />
            <Insurancedropdownpage content={content} />
        </>
    )
}

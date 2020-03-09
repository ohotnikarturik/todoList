import React from "react";
import './Subtitle.css'

const Subtitle = ({more, done}) => <h3 className='subtitle'>{more} to do, {done} done</h3>;


export default Subtitle;
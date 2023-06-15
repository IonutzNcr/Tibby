import React from 'react'
import image1 from "../cash.jpg";
import image2 from "../star.jpg";
import { Avatar } from "./Avatar";


const images = [{ url: image1, alt: "money" }, { url: image2, alt: "start" }];

export const Container = (props) => {
  return (
    <div className="container">
        <Avatar url={images[0].url} alt={images[0].alt} event = {props.event} />
        <Avatar  event = {props.event}/>
        <Avatar  event = {props.event}/>
        <Avatar url={images[1].url} alt={images[1].alt}  event = {props.event} />
    </div>
  )
}

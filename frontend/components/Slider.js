import React, { Component } from 'react'
import Carousel from 'nuka-carousel';

export default class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div>slide1</div>
                    <div>slide2</div>
                    <div>slide3</div>
                    <div>slide4</div>
                </Carousel>
            </div>
        )
    }
}

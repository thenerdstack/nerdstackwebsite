import React, { Component } from 'react';
import PreloaderStyle from './preloader.style'

class Preloader extends Component {
    render() {
        return (
            <PreloaderStyle>
                <div className={`preloader ${this.props.loading ? '' : 'preloader-deactivate'}`}>
                    <div className="loader">
                        <div className="shadow"></div>
                        <div className="box"></div>
                    </div>
                </div>
            </PreloaderStyle>
        );
    }
}

export default Preloader;
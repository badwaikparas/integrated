import React from 'react'
import Tile from './Tile'
import '../../../css/Tiles6.css'
function Tiles6(props) {
    return (
        <div>
            <div className="main-content container-fluid col-xs-12 col-md-3 col-lg-3 hidden-xs">
                <div className="panel-heading"> <strong>{props.context} Situation</strong> <span className="panel-subtitle">{props.context} Situation Description</span> </div>
                <div className="row" style={{ display: "grid", padding: "0px 20px 0px 20px" }}>
                    <Tile total={"10"} frac={"1"} info={"info"} />
                    <Tile total={"10"} frac={"1"} info={"info"} />
                    <Tile total={"10"} frac={"1"} info={"info"} />
                    <Tile total={"10"} frac={"1"} info={"info"} />
                    <Tile total={"10"} frac={"1"} info={"info"} />
                    <Tile total={"10"} frac={"1"} info={"info"} />
                </div>
            </div>
        </div>
    )
}

export default Tiles6
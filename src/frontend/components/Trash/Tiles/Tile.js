import React from 'react'

function Tile(props) {
    return (
        <div className="col-md-6 col-xs-6 border-right">
            <div className="tasks-status-stat">
                <h3 className="text-bold ciuis-task-stat-title">
                    <span className="task-stat-number ng-binding" ng-bind="(orders | filter:{status_id:'1'}).length">{props.frac}</span>
                    <span className="task-stat-all ng-binding" ng-bind="'/'+' '+orders.length+' '+'Order'">/ {props.total} {props.info}</span>
                </h3>
                <span className="ciuis-task-percent-bg">
                    <span className="ciuis-task-percent-fg" style={{ width: "NaN %" }}></span>
                </span>
            </div>
            <span className="text-uppercase" style={{ color: "#989898" }}>{props.info}</span>
        </div>
    )
}

export default Tile;
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function ProgressBar(props) {
    const wrapperStyle = {
        position: 'relative',
        width: '200px',
        height: '200px',
        margin: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',  // Background color
        borderRadius: '50%',         // Makes the wrapper a circle
    };

    const progressBarStyle = {
        position: 'absolute',
        width: '90%',
        height: '90%',
    };
    return (
        <div style={wrapperStyle}>
            <div style={progressBarStyle}>
                <CircularProgressbar
                    value={props.value}
                    maxValue={100}
                    text={`${props.value}%`}
                    styles={buildStyles({
                        pathColor: props.color,
                        textColor: props.color,
                        trailColor: '#ececec',  // Make the trail transparent
                    })}
                    strokeWidth={2}
                />
            </div>
        </div>
    )
}

export default ProgressBar
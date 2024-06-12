import React from "react";
// import TimeLineTile from "./TimeLineTile";
import { Timeline } from '@material-ui/lab';
// import { makeStyles } from '@material-ui/core'
import { TimelineItem, TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator, } from '@mui/lab'



function TimeLineSection() {

    return (
        <>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                </TimelineItem>
            </Timeline >
        </>
        // <Timeline>
        //     <TimelineItem>
        //         <TimelineSeparator>
        //             <TimelineDot />
        //             <TimelineConnector />
        //         </TimelineSeparator>
        //         <TimelineContent>
        //             City A
        //         </TimelineContent>
        //     </TimelineItem>
        // </Timeline>
        // <></>
    )
}

export default TimeLineSection
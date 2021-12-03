import React from "react";
import './Badge.css'
import Badge2 from "./Badge2";


function Badge(props) {

    return (
        <>
            {
                props.badgeList.map((badge, index) => (
                    <>
                        {badge.length > 0 &&
                            <Badge2 key={'badge2_' + index} badge={badge} index={index} rmBadge={(i) => props.rmBadge(i)} addRecordList={(badge) => props.addRecordList(badge)}></Badge2>
                        }
                    </>
                ))
            }
        </>
    );
}


export default Badge;

import React, { useState } from 'react';
import Badge from "./Badge";
import Record from "./Record"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { scroller } from 'react-scroll'
import Tag from './Tag';

function Top() {

    const [inptVal, setInptVal] = useState(['', '#000000', '#FFAFAF'])

    //badgeList
    //  badge: [[name, fontcolor, backgroundcolor]...]
    const [badgeList, setbadgeList] = useState([[]]);

    //recordList
    //  record : [
    //    badge [name, fontcolor, backgroundcolor],
    //    input
    // ] 
    const [recordList, setRecordList] = useState([]);

    const rmBadge = (index) => {
        let arry = badgeList.filter((item, itemIndex) => itemIndex !== index)
        setbadgeList(arry);
    }

    const addRecordList = (badge) => {
        setRecordList([...recordList, [badge, '']]);
        scroller.scrollTo('scroll-target', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        });
    }

    const addBadge = () => {
        let nm = inptVal[0];
        let txtClr = inptVal[1];
        let bgClr = inptVal[2];
        setbadgeList([...badgeList, [nm, txtClr, bgClr]]);
        let will = inptVal.slice();
        will[0] = '';
        setInptVal(will)
    }
    const chngBdgClr = (val) => {
        let will = inptVal.slice();
        will[2] = val;
        setInptVal(will)
    }
    const chngFntClr = (val) => {
        let will = inptVal.slice();
        will[1] = val;
        setInptVal(will)
    }
    const chngNm = (val) => {
        let will = inptVal.slice();
        will[0] = val;
        setInptVal(will)
    }

    return (
        <>
            <h1>test</h1>
            <hr></hr>
            <button onClick={addBadge}>THIS WILL ADD SPAN</button>
            <hr></hr>
            <input type="text" value={inptVal[0]} onChange={(e) => { chngNm(e.target.value) }}></input>
            <input type="color" value={inptVal[1]} onChange={(e) => { chngFntClr(e.target.value) }}></input>
            <input type="color" value={inptVal[2]} onChange={(e) => { chngBdgClr(e.target.value) }}></input>
            <DndProvider backend={HTML5Backend}>
                <div style={{
                    display: "flex",
                }}>
                    <Badge badgeList={badgeList} rmBadge={(i) => rmBadge(i)} addRecordList={(badge) => addRecordList(badge)}></Badge>
                </div>
                <hr></hr>
                <div style={{
                    display: "flex",
                }}>
                    <div style={{
                        display: "flex",
                    }}>
                        <Record recordList={recordList} addRecordList={(badge) => addRecordList(badge)}>
                        </Record>
                    </div>
                    <div style={{
                        display: "flex",
                    }}>
                        <Tag></Tag>
                    </div>
                </div>
                <hr></hr>
            </DndProvider>
        </>
    );
}
export const ItemTypes = {
    Badge: 'Badge'
}

export default Top;

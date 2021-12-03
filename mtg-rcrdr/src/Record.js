import "./Record.css"
import Record2 from "./Record2";
import { ItemTypes } from './Top'
import { useDrop } from 'react-dnd'

function Record(props) {
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.Badge,
    }))

    //recordList
    //  record : { 
    //    badge [name, fontcolor, backgroundcolor],
    //    input,  
    // }...
    return (
        <div id="scroll-container"
            className="record-area"
            ref={drop}
        >
            {props.recordList.map((record, index) => (
                <Record2 record={record} index={index} key={'record2_' + index}></Record2>
            ))}
            <div id="scroll-target"></div>
        </div>
    );

}
export default Record;
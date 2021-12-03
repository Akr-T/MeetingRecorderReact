import "./Record.css"

function Record2(props) {
    //recordList
    //  record : { 
    //    badge [name, fontcolor, backgroundcolor],
    //    input,  
    // }...
    return (
        <div
            className="record-list"
        >
            <div className="badge"
                style={{
                    color: props.record[0][1],
                    backgroundColor: props.record[0][2],
                }}
            >
                <span>{props.record[0][0]}</span>
            </div>
            <div>
                <div className="balloon" contentEditable="true"></div>
            </div>
        </div>
    );

}
export default Record2;
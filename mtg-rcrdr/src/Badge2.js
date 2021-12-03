import { ItemTypes } from './Top'
import { useDrag } from 'react-dnd'


function Badge2(props) {
    const [{ isDragging }, drag] = useDrag(() => ({
        item: [props],
        type: ItemTypes.Badge,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (draggedItem, monitor) => {
            if (monitor.getDropResult()) {
                console.log(draggedItem)
                props.addRecordList(draggedItem[0].badge)
            }
        }
    }), [props])
    return (
        <div>
            <div key={props.index}
                className="badge-area"
                ref={drag}
                style={{
                    opacity: isDragging ? 0.5 : 1,

                }}
            >
                <div className="badge"
                    style={{
                        color: props.badge[1],
                        backgroundColor: props.badge[2],
                    }}
                    onClick={props.addRecordList.bind(this, props.badge)}
                >
                    <span>{props.badge[0]}</span>
                </div>
                <div className="del-btn"
                    onClick={props.rmBadge.bind(this, props.index)}
                >
                    <span className="del-btn-v"></span>
                    <span className="del-btn-h"></span>
                </div>
            </div>
        </div>
    )

}

export default Badge2;
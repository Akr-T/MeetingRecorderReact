import './TagBadge.css'


function TagBadge(props) {
    return (
        <>
            <div className={props.type}>
                {props.type}
            </div>
        </>
    );

}
export default TagBadge;
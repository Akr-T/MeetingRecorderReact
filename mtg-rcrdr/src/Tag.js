import './Tag.css'
import TagBadge from './TagBadge'
import ResetTagBadge from './ResetTagBadge'

function Tag(props) {
    return (
        <div className={'tag_area'}>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TagBadge type={'homework'} ></TagBadge>
                <TagBadge type={'decide'}></TagBadge>
                <TagBadge type={'question'}></TagBadge>
            </div>
            <div>
                <ResetTagBadge></ResetTagBadge>
            </div>
        </div>
    );
}

export default Tag;
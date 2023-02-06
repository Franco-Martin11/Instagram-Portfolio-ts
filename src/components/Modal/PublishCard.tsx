
import { CommentsPublish, ImageSliderPublish, HeadCardPublish, Avatar } from './components/index'

type Props = {}

const PublishCard = (props: Props) => {
    return (
        <div className="bg-black">
            <HeadCardPublish />
            <Avatar/>
            <ImageSliderPublish />
            <CommentsPublish />
        </div>
    )
}

export default PublishCard
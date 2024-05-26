import Image from 'next/image';
import classes from './post-details.module.scss';
import { IMAGE_LINKS } from '../../../models/constants/common.constant';

const PostDetails = ({
    userImg = IMAGE_LINKS.DEFAULT_USER_IMG,
    userName = "Default Name",
    lastUpdated = 5,
    postContent = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    comments = 24
}: {
    userImg?: string,
    userName?: string,
    lastUpdated?: number,
    postContent?: string,
    comments?: number
}) => {
    return (
        <div className={classes.container}>
            <div className={classes.container_1}>
                <div className={classes.container_1_left}>
                    <Image
                        className={classes.container_1_left_img}
                        src={userImg}
                        alt="user-img"
                        width={44}
                        height={44}

                    />
                    <div className={classes.container_1_left_values}>
                        <div className={classes.container_1_left_values_1}>{userName}</div>
                        <div className={classes.container_1_left_values_2}>{lastUpdated}mins ago</div>
                    </div>
                </div>
                <Image
                    className={classes.container_1_img}
                    src={IMAGE_LINKS.HORIZONTAL_DOTS}
                    alt="horizontal-dots"
                    width={20}
                    height={20}
                />
            </div>
            <div className={classes.container_2}>
                <Image
                    src={IMAGE_LINKS.DEFAULT_POST_EMOJI}
                    alt="default-emoji"
                    width={48}
                    height={48}
                    className={classes.container_2_img}
                />
                <div className={classes.container_2_text}>{postContent}</div>
            </div>
            <div className={classes.container_3}>
                <Image 
                    src={IMAGE_LINKS.CHAT_BUBBLE}
                    alt="chat-bubble"
                    height={14}
                    width={14}
                    className={classes.container_3_img}
                />
                <span>{comments} comments</span>
            </div>
        </div>
    )
}

export default PostDetails;
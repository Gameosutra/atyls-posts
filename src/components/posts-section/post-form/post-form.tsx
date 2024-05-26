import Image from 'next/image';
import Button from '../../helper-components/button/button';
import classes from './post-form.module.scss';
import { IMAGE_LINKS } from '../../../models/constants/common.constant';
import Input from '../../helper-components/input/input';
import { useState } from 'react';
import { InputTypeEnums } from '../../../models/enums/input.enum';

const PostForm = ({
    onClickPost
}: {
    onClickPost: () => void
}) => {
    const [postContent, setPostContent] = useState('');
    return (
        <div className={classes.container}>
            <div className={classes.container_1}>Create Post</div>
            <div className={classes.container_2}>
                <Image
                    className={classes.container_2_img}
                    src={IMAGE_LINKS.CHAT_BUBBLE_BLACK}
                    alt="chat-bubble"
                    height={48}
                    width={48}
                />
                <Input
                    value={postContent}
                    placeholder='How are you feeling today?'
                    onChange={(value) => setPostContent(value?.target?.value)}
                    type={InputTypeEnums.TEXT}
                    classNames={{
                        container: classes.container_2_input
                    }}
                />
            </div>
            <div className={classes.container_3}>
            <Button
                value="Post"
                onClick={onClickPost}
                classNames={{
                    container: classes.container_3_btn
                }}
            />
            </div>
        </div>
    )
}

export default PostForm;
import { useState } from 'react';
import { DEFAULT_POSTS } from '../../models/constants/common.constant';
import PostDetails from './post-details/post-details';
import classes from './posts-section.module.scss';
import PostForm from './post-form/post-form';
import Overlay from '../helper-components/overlay/overlay';
import AuthenticateForm from '../authenticate-form/authenticate-form';
import { AuthenticationEnums } from '../../models/enums/authenticate.enums';

const PostsSection = ({ }: {}) => {
    const [posts, setPosts] = useState(DEFAULT_POSTS);
    const [isOpen, setIsOpen] = useState(false);

    const userName = "Manushivam";

    const onClickPost = () => {
        setIsOpen(true);
    }

    return (
        <>
            <div className={classes.container}>
                <div>
                    <div className={classes.container_1}>
                        Hello {userName}
                    </div>
                    <div className={classes.container_2}>
                        How are you doing today? Would you like to share something with the community 🤗
                    </div>
                    <PostForm
                        onClickPost={onClickPost}
                    />
                    {(posts || []).map((post) => (
                        <PostDetails key={post?.id} {...post} />
                    ))}
                </div>
            </div>
            <div>
                {isOpen && <Overlay
                    onClose={() => setIsOpen(false)}
                >
                    <AuthenticateForm type={AuthenticationEnums.SIGN_UP} callBack={() => setIsOpen(false)} />
                </Overlay>}

            </div>
        </>
    )
}

export default PostsSection;
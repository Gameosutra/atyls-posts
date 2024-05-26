
import { useEffect } from "react";

import Image from "next/image";
import classes from "./overlay.module.scss";
import { IMAGE_LINKS } from "../../../models/constants/common.constant";

const Overlay = ({
    onClose,
    closeIcon = IMAGE_LINKS.CLOSE,
    disableClose = false,
    children,
}: any) => {

    const handleContainerClick = (event: any) => {
        event?.stopPropagation();
    };

    const closeModal = () => {
        if (disableClose) {
            return;
        }

        onClose?.();
    };

    const onOverlayClick = () => {
        closeModal?.();
    };

    return (
        <div
            className={`${classes.overlay}`}
            onClick={onOverlayClick}
        >
            <div
                className={`${classes.overlayContent} ${classes.overlay_border}`}
                onClick={handleContainerClick}
            >
                <button
                    className={`${classes.closeButton}`}
                    onClick={closeModal}
                >
                    <Image
                        className={classes.close}
                        src={closeIcon}
                        width="24"
                        height="24"
                        alt="close"
                    />
                </button>
                <section className={classes.body}>{children}</section>
            </div>
        </div>
    );
};

export default Overlay;
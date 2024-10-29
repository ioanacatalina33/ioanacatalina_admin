import { useEffect, useRef } from 'react';

import { Container, Wrapper } from './Loader.style';
import { SpacingOffsets } from 'types/styles';

interface Props extends SpacingOffsets {
    className?: string;
    primary?: boolean;
    center?: boolean;
    offset?: number;
    color?: (c: typeof LoaderColor) => LoaderColor;
}

export enum LoaderColor {
    grey = 'grey',
    white = 'white',
    primary = 'primary'
}

export function Loader({
    className,
    primary,
    center,
    offset,
    color = (c) => c.grey,
    // SPACING OFFSETS
    paddingOffset,
    marginOffset
}: Props) {
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (loaderRef.current) {
            // lottie.loadAnimation({
            // 	container: loaderRef.current,
            // 	renderer: 'svg',
            // 	loop: true,
            // 	autoplay: true,
            // 	animationData: getAnimation()
            // });
        }
    }, [loaderRef]);

    if (primary) {
        return (
            <Container className={className}>
                {/* <PageLoader ref={loaderRef} /> */}
                <div className="loader">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                    <div className="dot3"></div>
                </div>
            </Container>
        );
    }

    return (
        <Wrapper
            className={className}
            center={center}
            marginOffset={marginOffset}
            paddingOffset={paddingOffset}>
            <div className={`loader ${color(LoaderColor)}`}>
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
            </div>
        </Wrapper>
    );
}

import { RefObject, useEffect, useRef } from "react";

interface IDimensionsProps {
    width: number;
    height: number;
}

export const useDimensions = (ref: RefObject<HTMLElement>): IDimensionsProps => {
    const dimensions = useRef<IDimensionsProps>({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
    }, [ref]);

    return dimensions.current;
};
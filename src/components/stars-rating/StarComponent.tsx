import {useId} from "react";

interface StarProps {
    left: string;
    right: string;
}

const StarComponent = ({ left, right }: StarProps) => {
    const gradientId = useId();

    return (
        <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" stopColor={left} />
                    <stop offset="50%" stopColor={right} />
                </linearGradient>
            </defs>

            <path
                d="M10.74,2.27a1.44,1.44,0,0,1,2.52,0l2.36,4.42a1.44,1.44,0,0,0,1.06.77l4.81.85a1.44,1.44,0,0,1,.79,2.44l-3.39,3.53a1.44,1.44,0,0,0-.4,1.24l.67,4.86a1.44,1.44,0,0,1-2,1.48l-4.4-2.15a1.44,1.44,0,0,0-1.28,0l-4.4,2.15a1.44,1.44,0,0,1-2-1.48l.67-4.86a1.44,1.44,0,0,0-.4-1.24L1.44,10.77a1.44,1.44,0,0,1,.79-2.44l4.81-.85a1.44,1.44,0,0,0,1.06-.77Z"
                fill={`url(#${gradientId})`}
            />
        </svg>
    );
};

export default StarComponent;



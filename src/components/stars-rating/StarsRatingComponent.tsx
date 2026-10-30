import type { FC } from "react";
import StarComponent from "./StarComponent.tsx";

type RatingPropsType = {
    rating: number;
};

const StarsRatingComponent: FC<RatingPropsType> = ({ rating }) => {
    const stars = rating / 2; // 0–10 → 0–5

    return (
        <div style={{ display: "flex", gap: "4px" }}>
            {[1, 2, 3, 4, 5].map((i) => {
                const isFull = stars >= i;
                const isHalf = stars >= i - 0.5 && stars < i;

                if (isFull) {
                    // полностью зелёная
                    return <StarComponent key={i} left="#53a379" right="#53a379"/>;
                }

                if (isHalf) {
                    // половинка: левая зелёная, правая серая
                    return <StarComponent key={i} left="#53a379" right="#716d67"/>;
                }

                // пустая: полностью серая
                return <StarComponent key={i} left="#716d67" right="#716d67"/>;
            })}
        </div>
    );
};

export default StarsRatingComponent;
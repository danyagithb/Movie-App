import type {FC} from "react";

type RatingPropsType = {
    rating: number
}

const StarsRatingComponent: FC<RatingPropsType> = ({rating}) => {

    const stars: number = rating / 2; // 0–10 → 0–5

    return (
        <div style={{ display: "flex", gap: "4px" }}>
            {[1, 2, 3, 4, 5].map((i: number) => {
                const isFull = stars >= i;
                const isHalf = stars >= i - 0.5 && stars < i;

                if (isFull) {
                    return (
                        <span key={i} style={{ color: "#F5C518", fontSize: "22px" }}>
                            ★
                        </span>
                    );
                }

                if (isHalf) {
                    return (
                        <span
                            key={i}
                            style={{
                                fontSize: "22px",
                                background: "linear-gradient(90deg, #F5C518 50%, #ccc 50%)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            ★
                        </span>
                    );
                }

                return (
                    <span key={i} style={{ color: "#ccc", fontSize: "22px" }}>
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default StarsRatingComponent;
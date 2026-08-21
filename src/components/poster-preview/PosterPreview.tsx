import type {FC} from "react";

type PosterPropsType = {
    image: string,
    title: string
}

const PosterPreview: FC<PosterPropsType> = ({image, title}) => {

    const posterImage = `https://image.tmdb.org/t/p/w342${image}`

    return (
        <div className={'poster-preview'}>
            <img src={posterImage} alt={title}/>
        </div>
    );
};

export default PosterPreview;
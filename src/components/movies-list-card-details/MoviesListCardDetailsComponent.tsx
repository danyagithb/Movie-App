import "./movie-card-details.css";
import {type FC, useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {moviesActions} from "../../redux/slices/movieSlice.ts";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import ISO6391 from "iso-639-1";
import StarsRatingComponent from "../stars-rating/StarsRatingComponent.tsx";

countries.registerLocale(enLocale);

type DetailsPropsType = {
    movieId: string
}

const MoviesListCardDetailsComponent: FC<DetailsPropsType> = ({movieId}) => {


    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(({movieStoreSlice}) => movieStoreSlice);

    useEffect(() => {
        if (movieId) {
            dispatch(moviesActions.loadMovie(movieId))
        }
    }, [movieId, dispatch]);

    return (
        <div className={"movie-details"}>
            {movie &&
                <div>
                    <section className="movie-details-hero" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,}}>

                        <div className={"container"}>
                            <div>
                                <img  src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                      alt={movie.title}
                                      className={"movie-poster"}
                                />
                                <div>
                                    <div className={"stars-rating-block"}>
                                        <StarsRatingComponent key={movie.id} rating={movie.vote_average}/>
                                        <p className={"vote-average"}>{movie.vote_average.toFixed(1)}</p>
                                    </div>
                                    <p>{movie.vote_count} votes</p>
                                </div>
                            </div>

                            <div className={"pt-28"}>
                                <h2 className={"text-5xl font-bold mb-2.5"}>{movie.title}</h2>
                                <div>
                                    <p>{movie.tagline}</p>
                                    <ul className="genres-list">
                                        {movie.genres.map(genre => (
                                            <li className={"movie-details-genre-item"} key={genre.id}>{genre.name}</li>
                                        ))}
                                    </ul>
                                    <p>
                                        {movie.adult && "18+"}
                                    </p>
                                    <a href={movie.homepage} target={"_blank"} rel={"noopener noreferrer"} className={"button-homepage"}>Homepage</a>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className={"movie-about"}>

                        <div className={"container"}>
                            <div className={"max-w-[500px]"}>
                                <p>{movie.overview}</p>
                            </div>
                            <div className={"movie-info-text"}>
                                <div>
                                    <h4>Year of manufacture</h4>
                                    <p>{movie.release_date.slice(0, 4)}</p>
                                </div>
                                <div>
                                    <h4>Budget</h4>
                                    <p>${movie.budget}</p>
                                </div>
                                <div>
                                    <h4>Country</h4>
                                    <ul>
                                        {movie.origin_country.map(item => (
                                            <li key={item}>{countries.getName(item, "en")}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4>Language</h4>
                                    <p>{ISO6391.getName(movie.original_language)}</p>
                                </div>
                                <div>
                                    <h4>Revenue</h4>
                                    <p>${movie.revenue}</p>
                                </div>
                                <div className="production-companies">
                                    {movie.production_companies.map(company => (
                                        <div key={company.id} className="company-item">
                                            {company.logo_path && (
                                                <img
                                                    src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                                    alt={company.name}
                                                    className="company-logo w-10 bg-white"
                                                />
                                            )}
                                            <p className="company-name">{company.name}</p>
                                            <p className="company-country">{countries.getName(company.origin_country, "en")}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="production-countries">
                                    <h4>Production countries:</h4>
                                    <span>
                                    {movie.production_countries.map(c => c.name).join(", ")}
                                </span>
                                </div>

                                <div className="runtime">
                                    Runtime: {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min
                                </div>

                                <div className="spoken-languages">
                                    <h4 className="title">Spoken languages</h4>
                                    <span className="values">
                                    {movie.spoken_languages.map(lang => lang.english_name).join(", ")}
                                </span>
                                </div>

                                <div>
                                    <h4>Status</h4>
                                    <p>{movie.status}</p>
                                </div>

                            </div>
                        </div>

                    </section>

                    {movie.belongs_to_collection && (
                        <section className={"movie-collections-hero"} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.belongs_to_collection.backdrop_path})`,}}>
                            <div className={"container"}>
                                <div className={"movie-collections-block"}>
                                    <img  src={`https://image.tmdb.org/t/p/w400${movie.belongs_to_collection.poster_path}`}
                                          alt={movie.belongs_to_collection.name}
                                          className="movie-poster"
                                    />

                                    <h3 className={"text-5xl font-bold"}>{movie.belongs_to_collection.name}</h3>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            }
        </div>
    );
};

export default MoviesListCardDetailsComponent;
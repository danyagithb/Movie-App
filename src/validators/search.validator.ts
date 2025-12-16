import Joi from "joi";

export const searchMovieValidator = Joi.object({
    movieSearchTitle: Joi.string().pattern(/^[A-Za-z0-9\s'":-]{2,100}$/).required().messages({
        'string.empty': 'Поисковая строка не может быть пустой',
        'string.pattern.base': 'Допустимы только латинские буквы, цифры и базовые символы',
        'string.min': 'Минимум 2 символа',
        'string.max': 'Максимум 100 символов'
    })

});
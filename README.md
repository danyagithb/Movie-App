Проект Movie App

Это сайт для поиска фильмов, созданный на React, Redux Toolkit и TMDb API.

На главной странице находится перечень фильмов (pages/MoviesPage), фильтрация, поиск и сортировка фильмов.
В конце страницы есть пагинация. 
Главная страница - path: '/'.

Нажав на фильм, открывается страничка с подробной информацией о фильме (pages/MovieDetailsPage).
Там вся информация о конкретном фильме - path: ':movieId/details'.


Если файл ".env" не запушится, то вот его содержимое:

VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkNmYyMWFmZmZhNWVjNjYzYWY1ZjlhNWFhZDM5MSIsIm5iZiI6MTc2NDY2NzYyMi4zNTAwMDAxLCJzdWIiOiI2OTJlYjBlNjgzOTM1NmE4YmQzZWE5ZWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FdgoBs5uZNv96Hhzf7e3BnKVeW9m5lJLQFQqeT3NWfo

Как открыть:
1) Создайте папку. Войдите и напишите в терминал: git clone https://github.com/danyagithb/Movie-App.git
2) Далее напишите в терминал: cd Movie-App
3) Установите необходимые зависимости: npm install
4) Откройте проект: npm run dev

Если отсуствует файл .env, создайте его написав в терминал: .env
Внесите в него вышеуказанные данные VITE_API_BASE_URL и VITE_API_KEY


Перед сдачей проекта я клонировал репозиторий в новую папку, установил зависимости и убедился, что проект запускается корректно.
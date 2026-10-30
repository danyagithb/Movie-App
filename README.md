Если файл ".env" не запушится, то вот его содержимое:

VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkNmYyMWFmZmZhNWVjNjYzYWY1ZjlhNWFhZDM5MSIsIm5iZiI6MTc2NDY2NzYyMi4zNTAwMDAxLCJzdWIiOiI2OTJlYjBlNjgzOTM1NmE4YmQzZWE5ZWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FdgoBs5uZNv96Hhzf7e3BnKVeW9m5lJLQFQqeT3NWfo

Это сайт с поиском разных фильмов.
На главной странице находится перечень фильмов (pages/MoviesPage), фильтрация, поиск и сортировка фильмов.
В конце страницы есть пагинация.

Нажав на фильм, открывается страничка с подробной информацией о фильме (pages/MovieDetailsPage).
Там вся информация о конкретном фильме.
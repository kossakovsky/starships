<template lang="pug">
  v-layout(fill-height align-center justify-center)
    v-flex(lg6 md8 sm10 xs12)
      h3 ТЗ:
      div Галактической республике необходима твоя помощь. Нужно создать интерфейс для взаимодействия с галактической базой.
      br
      div Всего необходимо реализовать 2 страницы. Список космических кораблей и страница корабля.
      br
      div Страница со списком кораблей:
      ul
        li На странице будет список всех кораблей
        li Добавить текстовое поле для поиска по названию корабля. Учесть возможность передачи результатов поиска по ссылке.
        li Реализовать пагинацию в формате next - prev
        li При клике по элементу списка, пользователь переходит на страницу с информацией по конкретному кораблю.
      br
      div Страница корабля:
      ul
        li Необходимо вывести всю информацию о корабле
      br
      div API https://swapi.co/documentation
      br
      div
        strong Endpoints
      ul
        li /starships/ -- get all the starship resources
        li /starships/:id/ -- get a specific starship resource
        li /starships/schema/ -- view the JSON schema for this resource
      br
      div Итоговая работа должна быть в формате ссылки на репозиторий.
      div Для реализации использовать VUEJS
      br
      h3
        nuxt-link(to="/starships") Решение
</template>

import AbstractView from 'Framework/view/abstract-view';

const createFilterTemplate = (film) => {
  const watchListCount = film.films.filter(({userDetails: { watchlist }}) => watchlist).length;
  const historytCount = film.films.filter(({userDetails: { alreadyWatched }}) => alreadyWatched).length;
  const favoritesCount = film.films.filter(({userDetails: { favorite }}) => favorite).length;

  return (`
    <nav class="main-navigation">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchListCount}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${historytCount}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoritesCount}</span></a>
    </nav>`
  );
};

export default class FilterView extends AbstractView {
  #films = null;

  constructor(films) {
    super();
    this.#films = films;
  }

  get template() {
    return createFilterTemplate(this.#films);
  }
}
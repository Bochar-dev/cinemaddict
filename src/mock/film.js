import { getRandomInteger, getRandomFloatInteger } from '../utils.js';

const POINTS_SCALE = 10;

const titles = [
  'The Third Man',
  'Brief Encounter',
  'Lawrence of Arabia',
  'Great Expectations',
  'Kind Hearts and Coronets',
  'A Matter of Life and Death',
];

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
];

const posters = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

const genres = [
  'Musical',
  'Western',
  'Comedy',
];

const emotions = [
  'smile',
  'sleeping',
  'puke',
  'angry',
];

const getRandomRaiting = () => getRandomFloatInteger(0, POINTS_SCALE);

const getRandomElementFromArray = (list) => {
  const randomIdx = getRandomInteger(0, list.length - 1);

  return list[randomIdx];
};

const getRandomArrayLength = (list) => list.slice(0, getRandomInteger(1, list.length - 1));

export const generateComments = (val, idx) => ({
  commentId: idx,
  author: 'Ilya O Reilly',
  comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  commentDate: '2019-05-11T16:12:32.554Z',
  emotion: getRandomElementFromArray(emotions)
});

export const generateFilm = (val, idx) => ({
  id: idx,
  comments: [1, 3],
  filmInfo: {
    title: getRandomElementFromArray(titles),
    alternativeTitle: 'Laziness Who Sold Themselves',
    totalRating: getRandomRaiting(),
    poster: `images/posters/${getRandomElementFromArray(posters)}`,
    ageRating: 0,
    director: 'Tom Ford',
    writers: [
      'Takeshi Kitano',
      'Kitano Kitano'
    ],
    actors: [
      'Morgan Freeman',
      'Freeman Freeman'
    ],
    release: {
      date: '2019-05-11T00:00:00.000Z',
      releaseCountry: 'Finland'
    },
    runtime: 77,
    genre: getRandomArrayLength(genres),
    description: getRandomElementFromArray(descriptions)
  },
  userDetails: {
    watchlist: false,
    alreadyWatched: true,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: false
  }
});

// selectors
export const getSearchString = ({searchString}) => searchString;

export const countAllCards = ({cards}) => cards.lenght;

export const countVisibleCards = ({cards, searchString}) => cards.lenght.filter(card => new RegExp(searchString, 'i').test(card.title));


// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}


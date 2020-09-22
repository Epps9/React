import {connect} from 'react-redux';
import Column from './Column';
import {ADD_CARD, getCardsForList} from '../../redux/cardsRedux';
import {createActionAddCard} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
    type: ADD_CARD,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
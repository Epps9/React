import {connect} from 'react-redux';
import {getCardsForSearchResults} from '../../redux/cardsRedux';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state) => ({
  cards: getCardsForSearchResults(state),
});

const mapDispatchToProps = (dispatch) => ({
  searchText: title => dispatch(createAction_changeSearchString(
    title
  )),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the layout state domain
 */

const selectLayoutDomain = state => state.layout || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Layout
 */

const makeSelectLayout = () =>
  createSelector(
    selectLayoutDomain,
    substate => substate,
  );

export default makeSelectLayout;
export { selectLayoutDomain };

import React from 'react';
import Proptypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TrellAction from '../actions';
import './App.css';

const App = ({boards, actions}) => (
  <div>
    <h1>Hello Trello</h1>
  </div>
)

App.prototype = {
  boards: Proptypes.array.isRequired,
  actions: Proptypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TrellAction,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(App);

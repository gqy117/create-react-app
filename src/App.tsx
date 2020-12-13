import React from 'react';
import logo from './logo.svg';
import './App.css';

import CurrencyTable from './currency/currencyTable';
import useCurrencyTable, { IUseCurrencyTableProp } from './currency/useCurrencyTable';
import { connect } from 'react-redux';
import { RootState } from './app/store';
import { getCurrency } from './currency/currencyThunk';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';

const App: React.FC<IUseCurrencyTableProp> = ({ rows, getCurrency }: IUseCurrencyTableProp) => {
  useCurrencyTable({ getCurrency });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CurrencyTable rows={rows} />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return { rows: state.currency.rows };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { ...bindActionCreators({ getCurrency }, dispatch) };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;

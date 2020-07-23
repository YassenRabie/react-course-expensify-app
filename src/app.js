import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 450 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 750, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 100540 }))

const state = store.getState()
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(VisibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
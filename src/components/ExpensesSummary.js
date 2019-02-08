import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';



const ExpensesSummary = ({ expenses }) => {
    const expenseCount = expenses.length;
    const expensesTotal = selectExpensesTotal(expenses)
    return (
        <div>
            <h3>Viewing {expenseCount} expenses totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h3>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};


export default connect(mapStateToProps)(ExpensesSummary);
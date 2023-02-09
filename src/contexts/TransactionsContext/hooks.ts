import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from './context'

export const useTransactionList = () => {
  return useContextSelector(
    TransactionsContext,
    (context) => context.transactionList
  )
}

export const useFetchTransactions = () => {
  return useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions
  )
}

export const useUpdateTransactions = () => {
  return useContextSelector(
    TransactionsContext,
    (context) => context.addTransaction
  )
}

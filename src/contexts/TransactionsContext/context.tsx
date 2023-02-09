import { useState, useEffect, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../../api'
import {
  NewTransactionData,
  Transaction,
  TransactionsContextData,
  TransactionsContextProviderProps,
} from './types'

export const TransactionsContext = createContext({} as TransactionsContextData)

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactionList, setTransactionList] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const config = { params: { _sort: 'createdAt', _order: 'desc', q: query } }
    const { data } = await api.get('/transactions', config)

    setTransactionList(data)
  }, [])

  const addTransaction = useCallback(async (data: NewTransactionData) => {
    const response = await api.post('/transactions', {
      ...data,
      createdAt: new Date(),
    })
    setTransactionList((state) => [response.data, ...state])
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactionList, fetchTransactions, addTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

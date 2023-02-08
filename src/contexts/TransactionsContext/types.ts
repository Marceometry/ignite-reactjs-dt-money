import { ReactNode } from 'react'

export interface NewTransactionData {
  description: string
  category: string
  price: number
  type: 'income' | 'outcome'
}

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export type TransactionsContextData = {
  transactionList: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  addTransaction: (data: NewTransactionData) => Promise<void>
}

export type TransactionsContextProviderProps = {
  children: ReactNode
}

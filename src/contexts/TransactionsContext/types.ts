import { ReactNode } from 'react'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export type TransactionsContextData = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  transactionList: Transaction[]
}

export type TransactionsContextProviderProps = {
  children: ReactNode
}

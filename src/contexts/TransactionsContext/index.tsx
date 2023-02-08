import { createContext, useContext, useState, useEffect } from 'react'
import {
  Transaction,
  TransactionsContextData,
  TransactionsContextProviderProps,
} from './types'

const API_BASE_URL = 'http://localhost:3333'

export const TransactionsContext = createContext({} as TransactionsContextData)

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [transactionList, setTransactionList] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch(`${API_BASE_URL}/transactions`)
    const data = await response.json()

    setTransactionList(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ isLoading, setIsLoading, transactionList }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionsContext)

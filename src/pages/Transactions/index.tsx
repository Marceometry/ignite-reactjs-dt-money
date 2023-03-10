import { Header, Summary } from '../../components'
import { useTransactionList } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils'
import { SearchForm } from './components'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => {
  const transactionList = useTransactionList()

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactionList.map((transaction) => (
              <tr key={transaction.id}>
                <td width='50%'>{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

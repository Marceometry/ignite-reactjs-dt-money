import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useUpdateTransactions } from '../../contexts'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

const newTransactionFormSchema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.number(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const addTransaction = useUpdateTransactions()
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleAddNewTransaction(data: NewTransactionFormInputs) {
    await addTransaction(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleAddNewTransaction)}>
          <input
            placeholder='Descrição'
            required
            {...register('description')}
          />
          <input
            placeholder='Preço'
            type='number'
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input placeholder='Categoria' required {...register('category')} />

          <Controller
            control={control}
            name='type'
            render={({ field }) => (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton variant='income' value='income'>
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton variant='outcome' value='outcome'>
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type='submit' disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}

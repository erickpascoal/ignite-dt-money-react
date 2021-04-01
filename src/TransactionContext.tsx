import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from './services/api';


interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionCreate) => Promise<void>;
}

interface TransactionProviderProps {
    children: ReactNode;
}

interface Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
}

type TransactionCreate = Omit<Transaction, 'id' | 'createdAt'>

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('http://localhost:3000/api/transactions').then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionCreate: TransactionCreate) {

        const response = await api.post('/transactions', {
            ...transactionCreate,
            createdAt: new Date()
        });

        const { transaction } = response.data;

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransaction() {
    const context = useContext(TransactionContext);
    return context;
}

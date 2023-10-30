import React from 'react';
import styles from './historialTransferencias.module.css';

const HistorialTranseferencias = () => {
    const transactions = [
        { id: 1, date: '2021-09-01', amount: 100 },
        { id: 2, date: '2021-09-02', amount: 200 },
        { id: 3, date: '2021-09-03', amount: 300 },
    ];

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistorialTranseferencias;

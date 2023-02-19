import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
    
export const Transaction = ({ items }) => {
    return <table className={css.transactionhistory}>
        <thead className={css.thead}>
            <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody className={css.tbody}>
            {items.map(item => (
                <tr key={item.id} className={css.tr}>
                    <td className={`${css.type} ${css.td}`}>{item.type}</td>
                    <td className={css.td}>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>                                                           
            ))}            
        </tbody>
        </table>
 }


Transaction.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
};
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const transRender = items.map(item => {
    return (
      <tr className={css.row} key={item.id}>
        <td className={css.cell}>{item.type}</td>
        <td className={css.cell}>{item.amount}</td>
        <td className={css.cell}>{item.currency}</td>
      </tr>
    );
  });
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr>
          <th className={css.headCell}>Type</th>
          <th className={css.headCell}>Amount</th>
          <th className={css.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>{transRender}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

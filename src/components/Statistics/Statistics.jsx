import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const Statistics = ({ title = null, stats }) => {
  const statRender = stats.map(stat => {
    return (
      <li
        style={{ backgroundColor: getRandomHexColor() }}
        key={stat.id}
        className={css.item}
      >
        {' '}
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}%</span>
      </li>
    );
  });
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>{statRender}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">Наші переваги</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Перевага</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Швидка доставка</td>
            <td>Доставляємо їжу протягом 30 хвилин.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Свіжі продукти</td>
            <td>Використовуємо тільки якісні інгредієнти.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Зручний сервіс</td>
            <td>Легкий інтерфейс для замовлення їжі.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

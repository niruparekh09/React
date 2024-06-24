/* eslint-disable react/prop-types */
export default function Item({ item, onDeleteItems }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

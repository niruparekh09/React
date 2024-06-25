/* eslint-disable react/prop-types */
export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Add some items to your list 🚀</em>
      </footer>
    );
  }
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentPacked = Math.floor((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You are good to go ✈"
          : `You have ${totalItems} items on your list, and you already packed 
          ${packedItems} (${percentPacked}%)`}
      </em>
    </footer>
  );
}


const TabsMenu = ({ menuItems, onTabChange }) => {
  const handleItemClick = (index) => {
    onTabChange(index);
  };

  return (
    <div>
      {menuItems.map((item, index) => (
        <button key={index} onClick={() => handleItemClick(index)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default TabsMenu;

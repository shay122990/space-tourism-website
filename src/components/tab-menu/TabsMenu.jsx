
const TabsMenu = ({ menuItems, onMenuItemClick }) => {
  return (
    <div>
      {menuItems.map((menuItem, index) => (
        <button key={index} onClick={() => onMenuItemClick(menuItem.id)}>
          {menuItem.title}
        </button>
      ))}
    </div>
  );
};

export default TabsMenu;

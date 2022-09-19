import Data from "../Data/Data";

const UpperFilter = ({ setItem, menuItems }) => {
  
  // const filterItem = (currentCategory) => {
  //   const newItem = Data.filter((newValue) => {
  //     return newValue.category === currentCategory; 
  //       	// comparing category for displaying data
  //   });
  //   setItem(newItem);
  // };

  return (
    <div className="flex flex-row justify-center pt-8">
      {menuItems.map((value, id) => {
        return (
          <div key={id} className="mx-1">
            <button className="btn-dark p-1 px-3 mx-5 fw-bold btn">{value}</button>
          </div>
        );
      })}
      <button
        className="btn-dark p-1 px-3 mx-5 fw-bold btn"
        onClick={() => setItem(Data)}
      >
        Všechno
      </button>
      {/* <div className="mx-1">
        <button>Jiné</button>
      </div> */}
    </div>
  );
};

export default UpperFilter;

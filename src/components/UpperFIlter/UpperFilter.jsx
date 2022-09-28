import Data from "../Data/Data";

const UpperFilter = ({ setItem, menuItems, filterItem }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center pt-8">
      {menuItems.map((value, id) => {
        return (
          <div
            key={id}
            className="mx-1 rounded-3xl hover:shadow-md transition-shadow"
            onClick={() => filterItem(value)}
          >
            <button className="p-1 px-3 mx-5 fw-bold btn text-gray">
              {value}
            </button>
          </div>
        );
      })}
      <div className="mx-1 rounded-3xl hover:shadow-md transition-shadow">
        <button
          className="p-1 px-3 mx-5 fw-bold btn text-gray"
          onClick={() => setItem(Data)}
        >
          Všechno
        </button>
      </div>
      {/* <div className="mx-1">
        <button>Jiné</button>
      </div> */}
    </div>
  );
};

export default UpperFilter;

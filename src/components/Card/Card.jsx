import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 pt-8">
      {item.map((place) => (
        <div
          key={place.id}
          className="flex flex-col justify-center items-center"
        >
          <div className="w-64 min-w-64 md:w-96 md:min-w-96 h-40 sm:h-44">
            <div className="w-full h-full relative">
              <Image
                className="rounded-t-lg"
                alt=""
                src={place.image}
                layout="fill"
              />
            </div>
          </div>
          {/* <div className="w-64 min-w-64 md:w-96 md:min-w-96 h-40">
            <div
              style={{ backgroundImage: `url(${place.image})` }}
              className="w-full h-full"
            ></div>
          </div> */}
          <div className="w-64 min-w-64 md:w-96 md:min-w-96 border border-zinc-100 rounded-b-lg py-3">
            <div className="px-3">
              <a href={place.url} className="font-semibold">
                <p className="text-lg">{place.name}</p>
              </a>
              <p className="text-gray text-sm pt-0.5 sm:pt-1 pb-1 sm:pb-1.5 text-ellipsis overflow-hidden whitespace-nowrap">
                {place.shortDescription}
              </p>
            </div>
            <div className="border-t border-zinc-100">
              <p className="text-gray text-sm pt-0.5 sm:pt-1 px-3">
                {place.city} •{" "}
                {place.category === "Obchody" ? "Obchod" : "Restaurace"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

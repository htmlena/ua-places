import { useState } from "react";

const PlaceCards = () => {
  

  return (
    <div className="grid md:grid-cols-2 gap-4 pt-8">
      {places.map((place) => (
        <div
          key={place.id}
          className="flex flex-col justify-center items-center"
        >
          <a href={place.url} className="font-semibold">
            <p>{place.name}</p>
          </a>
          <p>{place.shortDescription}</p>
          <p>{place.city}</p>
        </div>
      ))}
    </div>
  );
};

export default PlaceCards;

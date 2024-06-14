import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [allCards, setAllCards] = useState([]);

  const [selectedIndices, setSelectedIndices] = useState([]);
  const [showAlertMessage, setShowAllertMessage] = useState(false);

  const createAllCards = () => {
    let types = ["clubs", "diamonds", "hearts", "spades"];
    let cards = [];

    types.forEach((type) => {
      for (let i = 1; i <= 13; i++) {
        let name = i;
        if (i == 1) name = "A";
        if (i == 11) name = "J";
        if (i == 12) name = "Q";
        if (i == 13) name = "K";

        let card = {
          name,
          type,
        };
        cards.push(card);
      }
    });
    setAllCards(cards);
  };

  const pickOneRandomCard = () => {
    let randomIndex = Math.random() * (50 + 2);
    randomIndex = Math.round(randomIndex);
    return randomIndex;
  };

  const pickFiveRandomCards = () => {
    if (selectedIndices.length === 52) {
      setShowAllertMessage(true);
      return;
    } else if (showAlertMessage) {
      setShowAllertMessage(false);
    }
    // pick one random card
    // check if its already picked
    // if not add otherwise again call pick one.
    //  repeat 5 times
    let currentSelectedIndices = [];

    for (let i = 0; i < 5; i++) {
      let randomIndex = pickOneRandomCard();
      if (
        !selectedIndices.includes(randomIndex) &&
        !currentSelectedIndices.includes(randomIndex) &&
        randomIndex != 0
      ) {
        currentSelectedIndices.push(randomIndex);
      } else if (selectedIndices.length + currentSelectedIndices.length < 52) {
        i--;
      }
    }
    setSelectedIndices((prev) => [...prev, ...currentSelectedIndices]);
  };

  const removeOneCard = (index) => {
    if (showAlertMessage) {
      setShowAllertMessage(false);
    }
    // setSelectedIndices((prev) => prev.splice(index, 1));
    let updatedSelectedIndices = [...selectedIndices];
    updatedSelectedIndices.splice(index, 1);
    setSelectedIndices(updatedSelectedIndices);
  };

  useEffect(() => {
    createAllCards();
  }, []);

  return (
    <section className="w-full bg-green-700 h-screen p-5 space-y-4 overflow-y-auto">
      <div
        className="w-32 h-36 rounded flex items-center justify-center bg-gray-200 cursor-pointer"
        onClick={pickFiveRandomCards}
      >
        <span className="text-lg font-bold">Draw cards</span>
      </div>
      {showAlertMessage && (
        <p className="text-yellow-500 font-semibold">Deck is exhausted</p>
      )}
      {/* show drawn cards */}
      <div className="grid grid-cols-5 w-fit gap-2 mx-auto">
        {selectedIndices.map((ind, index) => {
          if (!allCards[ind - 1]) {
            console.log("missing card: ", ind, allCards);
          }
          return (
            <Card
              key={index}
              data={allCards[ind - 1]}
              onDelete={() => removeOneCard(index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Home;

import React, { useState, useEffect ,useMemo} from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";
const DraggableCard = ({
  card,
  index,
  onCardDrop,
  updatedMessages,
  cardIndex,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { cardIndex: index, cards: card, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const message = updatedMessages[cardIndex]?.props?.children;
  const borderColor =
    message === "Correct!" ? "green" : message === "Wrong!" ? "red" : "grey";

  return (
    <div
      ref={drag}
      style={{
        width: "250px",
        height: "400px",
        border: `2px dashed ${borderColor}`,
        boxShadow:
          "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
        padding: "8px",
        margin: "6px",
        borderRadius: "10px",
        cursor: "move",
      }}
    >
      {card.isCorrect ? (
        <>
          {card.Storyimage && (
            <>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  overflow: "hidden",
                  filter: `blur(5px)`,
                }}
              >
                <img
                  src={`https://ik.imagekit.io/dev24/${card.Storyimage}`}
                  alt={card.Storyimage}
                  style={{ width: "100%", height: "80%", borderRadius: "10px" }}
                />
              </div>
              <p
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "13px",
                }}
              >
                {card.Storyitext}
              </p>
            </>
          )}
        </>
      ) : (
        <>
          {card.Storyimage && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={`https://ik.imagekit.io/dev24/${card.Storyimage}`}
                alt={card.Storyimage}
                style={{ width: "100%", height: "80%", borderRadius: "10px" }}
              />
            </div>
          )}
          <p
            style={{
              marginTop: "10px",
              textAlign: "center",
              padding: "10px",
              fontSize: "13px",
            }}
          >
            {card.Storyitext}
          </p>
        </>
      )}
    </div>
  );
};

const ImageDropZone = ({
  title,
  content,
  cardIndex,
  onCardDrop,
  updatedMessages,
  setUpdatedMessages,
  card,
}) => {
  const [isShaking, setIsShaking] = useState(false);

  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleDrop = (item) => {
    const isCorrect =
      item.cards.title === card.title && item.cards.content === card.content;

    if (!isCorrect) {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 1000);
    }

    onCardDrop(item, cardIndex, isCorrect);
  };

  return (
    <div>
      <div
        ref={drop}
        className={isShaking ? "shake" : ""}
        style={{
          width: "250px",
          height: "400px", // Fixed height for all cards
          border: `2px dashed ${
            isOver ? (isShaking ? "red" : "green") : "#aaa"
          }`, // Red border if shaking, green if correct, default gray
          padding: "8px",
          margin: "4px",
          borderRadius: "10px",
          boxShadow:
            "0px 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          cursor: "move",
        }}
      >
        {/* <h4>{title}</h4>
        <p style={{ marginTop: '10px', textAlign: 'center', padding: '10px' }}>{content}</p>
        {updatedMessages[cardIndex] && <div>{updatedMessages[cardIndex]}</div>} */}
        <div>
          {card.isCorrect ? (
            <>
              {card.Storyimage && (
                <>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={`https://ik.imagekit.io/dev24/${card.Storyimage}`}
                      alt={card.Storyimage}
                      style={{
                        width: "100%",
                        height: "80%",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      fontSize: "18px",
                      marginTop: "15px",
                      color: "#0b2e56",
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      marginTop: "10px",
                      textAlign: "center",
                      padding: "10px",
                      fontSize: "13px",
                    }}
                  >
                    {content}
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <h4 style={{ fontSize: "18px", color: "#0b2e56" }}>{title}</h4>
              <p
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "13px",
                }}
              >
                {content}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Historywordexploreinnertab = () => {
  const [updatedMessages, setUpdatedMessages] = useState(["", "", ""]);
  const data = useSelector((state) => state.Story.DetailData);
  const initialCards =
    data?.Wordexplore?.map((item, index) => ({
      id: item._id,
      title: item.Storytitle,
      content: item.Storyttext,
      Storyimage: item.Storyimage,
      Storyitext: item.Storyitext,
    })) || [];

  const [cards, setCards] = useState(initialCards);
  useEffect(() => {
    setCards(initialCards);
  }, [data]);

  const handleCardDrop = async (draggedItem, cardIndex, isCorrect) => {
    setUpdatedMessages((prevMessages) => {
      const updatedMessagesCopy = [...prevMessages];
      updatedMessagesCopy[cardIndex] = isCorrect ? (
        <span style={{ color: "green" }}>Correct!</span>
      ) : (
        <span style={{ color: "red" }}>Wrong!</span>
      );
      return updatedMessagesCopy;
    });

    if (isCorrect) {
      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        updatedCards[cardIndex].isCorrect = isCorrect;
        return updatedCards;
      });
    }
  };

  // Shuffle the indexes
  const shuffledIndexes = useMemo(() => {
    const indexes = Array.from({ length: cards.length }, (_, i) => i);
    for (let i = indexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
    return indexes;
  }, [cards]);

  return (
    <>
      <h6 style={{ marginBottom: "30px" }}>
        Drag pictures to the matching words, light up correct pairs, shake for a
        retry
      </h6>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100%",
          width: "100%",
        }}
      >
        <DndProvider backend={HTML5Backend}>
          <div className="dnd-wrapper">
            <div className="dnd-draggable">
              {cards.map((card, index) => (
                <DraggableCard
                  key={index}
                  index={index}
                  card={card}
                  onCardDrop={handleCardDrop}
                  updatedMessages={updatedMessages}
                  cardIndex={index}
                />
              ))}
            </div>
            <div className="dnd-imagewrapper">
              {shuffledIndexes.map(
                (
                  index // Use shuffled indexes for rendering ImageDropZone components
                ) => (
                  <ImageDropZone
                    key={cards[index].id}
                    card={cards[index]} // Pass the card based on shuffled index
                    cardIndex={index}
                    title={cards[index].title}
                    content={cards[index].content}
                    onCardDrop={handleCardDrop}
                    updatedMessages={updatedMessages}
                    setUpdatedMessages={setUpdatedMessages}
                  />
                )
              )}
            </div>
          </div>
        </DndProvider>
      </div>
    </>
  );
};

export default Historywordexploreinnertab;

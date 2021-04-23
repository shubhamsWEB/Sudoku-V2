import React from "react";
import RandomBoard from "../../Components/RandomBoard";
import { suduko } from "../../utils/generateBoard";
import { Puzzle } from "../../utils/generatePuzzle";
import { useStopwatch } from "react-timer-hook";
const Board = (props) => {
  const [board, setBoard] = React.useState();
  const [puzzle, setPuzzle] = React.useState();
  const [inputNum, setInputNum] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState({ row: "", col: "" });
  const [prevIndex,setPrevIndex] = React.useState({row:"",col:''});

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  const handleButtonValueChange = (e,val) => {
    if(activeIndex.row !=="" && activeIndex.col!=="") {
    setInputNum(val);
    puzzle.newPuzzle[activeIndex.row][activeIndex.col].value = val;
    setPuzzle(puzzle)
    setInputNum(0);
    setPrevIndex({...activeIndex});
    setActiveIndex({ row: "", col: "" });
    } else {
      alert("Select Cell First")
    }
  };
const undo = () => {
  puzzle.newPuzzle[prevIndex.row][prevIndex.col].value = 0;
    setPuzzle(puzzle);
}
  React.useEffect(() => {
    const solution = suduko();
    setBoard(solution);
  }, []);

  React.useEffect(() => {
    if (board) {
      const gamePuzzle = Puzzle(board,props.match.params.level);
      setPuzzle(gamePuzzle);
    }
  }, [board]);

  const handelOnEdit = (num, r, c) => {
    setActiveIndex({ row: r, col: c });
  };

  if (puzzle) {
    return (
      <RandomBoard
        board={puzzle.board}
        puzzle={puzzle.newPuzzle}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        seconds = {seconds}
        minutes={minutes}
        hours={hours}
        days={days}
        isRunning={isRunning}
        start={start}
        pause={pause}
        reset={reset}
        handelOnEdit={handelOnEdit}
        handleButtonValueChange={handleButtonValueChange}
        inputNum={inputNum}
        OnUndo={undo}
      />
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Board;

import React, { useState } from 'react';

function Slides({ slides }) {
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(true)
  const [currSlide, setCurrSlide] = useState(0)
  const [restart, setRestart] = useState(false)

  const handleRestart = () => {
    setCurrSlide(0)
    setRestart(false)
    setPrev(false)
    setNext(true)
  }
  const handlePrev = () => {
    if (currSlide < 2) {
      setPrev(false)
      setRestart(false)
    } else {
      setPrev(true)
      setRestart(true)
      setNext(true)
    }
    setCurrSlide(currSlide - 1)
  }
  const handleNext = () => {
    if (currSlide < slides.length - 2) {
      setNext(true)
      setRestart(true)
      setPrev(true)
    } else {
      setNext(false)
      setRestart(true)
      setPrev(true)
    }
    setCurrSlide(currSlide + 1)
  }
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={handleRestart} disabled={!restart}>Restart</button>
        <button data-testid="button-prev" className="small" onClick={handlePrev} disabled={!prev}>Prev</button>
        <button data-testid="button-next" className="small" onClick={handleNext} disabled={!next}>Next</button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides && slides[currSlide].title}</h1>
        <p data-testid="text">{slides && slides[currSlide].text}</p>
      </div>
    </div>
  );

}

export default Slides;
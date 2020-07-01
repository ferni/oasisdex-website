/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';

import React, { useRef, useState } from 'react';

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const QuestionAndAnswer = ({ question, answer, onClick, isSelected }) => {
  const answerElement = useRef(null);
  const [height, setHeight] = React.useState(0);
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setHeight(answerElement.current ? answerElement.current.clientHeight : 0);
    }, 300);

    // todo: move subscribing to resize to Questions component
    window.addEventListener('resize', debouncedHandleResize);
    setHeight(answerElement.current ? answerElement.current.clientHeight : 0);
    // set the height after fonts have probably loaded, or system font is used
    const timeoutId = setTimeout(() => {
      setHeight(answerElement.current ? answerElement.current.clientHeight : 0);
    }, 3200);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      clearTimeout(timeoutId);
    };
  }, [height]);

  return (
    <Box
      key={question}
    >
      <div className="question-row">
        <div style={{ cursor: 'pointer' }} onClick={onClick}>
          <Text className="question">{question}</Text>
          <div className="plus-minus-toggle" />
        </div>
      </div>
      <div className="answer" style={{ maxHeight: isSelected ? height : 0 }}>
        <div ref={answerElement}>
          <Text as="div" className="answer-text">
            {answer}
          </Text>
        </div>
      </div>
    </Box>
  );
};

const Questions = ({ questions }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Box
      style={{
        maxWidth: '800px',
        textAlign: 'left',
        fontSize: '18px',
        lineHeight: '25px'
      }}
      px={{ s: '12px', m: 0 }}
      m={{ s: '25px auto', m: '29px auto' }}
    >
      {questions.map(({ q, a }, index) => {
        const isSelected = index === selectedIndex;
        return (
          <div key={q}>
            <QuestionAndAnswer
              question={q}
              answer={a}
              onClick={() => setSelectedIndex(isSelected ? null : index)}
              isSelected={isSelected}
            />
          </div>
        );
      })}
    </Box>
  );
};

export default Questions;

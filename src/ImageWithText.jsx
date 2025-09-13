import React from 'react'

function ImageWithText({ image, text,word,sentence,line }) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={image}
        alt="background"
        style={{ width: "100%", borderRadius: "12px" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "white"
        }}
        >
     <p
     style={{
          fontSize: "60px",
          fontWeight: "bold",
          textShadow: "2px 2px 5px black",
          paddingLeft: "80px",
          margin:0,
          lineHeight:"1"
        }}
      >
        {text}
      </p>
      <p
      style={{
        fontSize: "60px",
         fontWeight: "bold",
          textShadow: "2px 2px 5px black",
          paddingLeft: "110px",
          lineHeight:"1"
      }}
      >
        {word}
      </p>
      <p 
      style={{
        fontSize: "30px",
         fontWeight: "bold",
          textShadow: "2px 2px 5px black",
          paddingLeft: "110px"
      }}
      >
        {sentence}
      </p>
      <button 
      style={{
        backgroundColor: "yellow",
         marginLeft: "150px",
         height: "50px",
         width: "160px",
        padding: "2px 2px 2px 2px",
        borderRadius: "25px"
               }}
      >
        {line}
      </button>
    </div>
    </div>
  );
}

export default ImageWithText

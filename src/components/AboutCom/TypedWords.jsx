import React from 'react'
import { ReactTyped } from "react-typed";

const TypedWords = () => {
  return (
    <div>
          <div className="blurbox mb-5">
        <div className="Banner-about"></div>
        <div className="typeds-about">
          <ReactTyped
            strings={[
              "ABOUT US",
              "Perfect International Education Consultancy",
            ]}
            typeSpeed={40}
            loop
          />
        </div>
      </div>

    </div>
  )
}

export default TypedWords

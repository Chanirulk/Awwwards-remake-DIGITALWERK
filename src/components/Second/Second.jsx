import "./second.css";
import React from "react";
import { LottiePlayer } from "@lottiefiles/lottie-player";

const Second = () => {
  return <div className="s">
      <div className="mani">Manifesto</div>
      <div className="text-way">
          <p className="about">
          We don't do advertising. We identify a goal, sort <br />
          through the possibilities and find ways. With heart and <br />
          mind, we see the people behind the audience, form <br />
          messages and pour them into stories and experiences.
          </p>
        <p className="about-2">
          We don't do advertising. We identify a goal, sort <br />
          through the possibilities and find ways. With heart and <br />
          mind, we see the people behind the audience, form <br />
          messages and pour them into stories and experiences.
          <br />
          <br />
          We don't do advertising. We identify a goal, sort <br />
          through the possibilities and find ways. With heart and <br />
        </p>
      </div>
      <div className="oval">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets2.lottiefiles.com/packages/lf20_avndu8kw.json"
        >
    </lottie-player>
      </div>
  </div>;
};

export default Second;

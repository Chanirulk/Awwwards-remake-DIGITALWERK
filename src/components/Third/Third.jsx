import "./third.css";
import C from "../img/volvo.jpg";
import D from "../img/cup.jpg";
import E from "../img/drink.jpg";
import F from "../img/man.jpg";
import React from "react";
import { LottiePlayer } from "@lottiefiles/lottie-player";

const Third = () => {
  return <div className="t">
      <div className="rec">Recent <br /> Cases</div>
      <div className="rec-1">
          <h1 className="title-1">Volvo</h1>
          <p className="des-1">Thought leadership through sustainable communication</p>
          <div className="sub-rec-1">
              <img src={C} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="rec-2">
          <h1 className="title-1">Deemers Teehaus</h1>
          <p className="des-1">Freshly brewed: Austria's largest online shop</p>
          <div className="sub-rec-1">
              <img src={D} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="rec-3">
          <h1 className="title-1">Zurück zum Ursprung</h1>
          <p className="des-1">A website relaunch that goes deeper</p>
          <div className="sub-rec-1">
              <img src={E} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="rec-4">
          <h1 className="title-1">Rainer Schönfelder</h1>
          <p className="des-1">A website relaunch that goes deeper</p>
          <div className="sub-rec-1">
              <img src={F} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="oval-2">
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

export default Third;

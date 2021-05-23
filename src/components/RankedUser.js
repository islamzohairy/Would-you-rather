import React, { useEffect, useState } from "react";

function RankedUser({
  name,
  avatarURL,
  answered,
  asked,
  points,
  authed,
  rank,
}) {
  const [state, setState] = useState("none");

  useEffect(() => {
    if (authed) {
      setState("5px dashed #a1b3b0");
    } else {
      setState("1px solid #a1b3b0");
    }
  }, [authed]);

  return (
    <div style={{ border: state }} className="ranked-user">
      <div className="ranked-user-info">
        <h3 className="ranked-user-name">{name}</h3>
        <img draggable={false} src={`/images/${avatarURL}`} alt=" " />
      </div>

      <div className="ranked-user-points">
        <div className="ranked-user-points-divs">
          <h3>Asked</h3>
          <p>{asked}</p>
        </div>
        <div className="ranked-user-points-divs">
          <h3>Answered</h3>
          <p>{answered}</p>
        </div>
        <div className="ranked-user-points-divs">
          <h3>Points</h3>
          <p>{points}</p>
        </div>
        <div className="ranked-user-points-divs">
          <h3>Rank</h3>
          <p>{rank + 1}</p>
        </div>
      </div>
    </div>
  );
}

export default RankedUser;

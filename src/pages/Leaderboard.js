import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RankedUser from "../components/RankedUser";

function Leaderboard() {
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    const func = () => {
      const arr = Object.values(users)
        .map((user) => {
          return {
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answered: Object.keys(user.answers).length,
            asked: Object.keys(user.questions).length,
            points:
              Object.keys(user.questions).length +
              Object.keys(user.answers).length,
            authed: authedUser.id === user.id,
          };
        })
        .sort((a, b) => b.points - a.points);

      setSortedUsers([...arr]);
    };

    func();
  }, [authedUser.id, users]);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      {sortedUsers &&
        sortedUsers.map((user, index) => (
          <RankedUser
            key={"leaderboard" + user.id}
            rank={index}
            name={user.name}
            avatarURL={user.avatarURL}
            answered={user.answered}
            asked={user.asked}
            points={user.points}
            authed={user.authed}
          />
        ))}
    </div>
  );
}

export default Leaderboard;

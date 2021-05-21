import React, { useState, useEffect } from "react";

function User({ name, avatarURL }) {
  const [img, setImg] = useState();

  useEffect(() => {
    setImg(avatarURL);
  }, [avatarURL]);

  return (
    <div className="user">
      {img && (
        <img
          key={`login` + avatarURL}
          draggable={false}
          className="user-avatar-img"
          src={`/images/${img}`}
          alt={name + " img"}
        />
      )}

      <p className="user-name">{name}</p>
    </div>
  );
}

export default User;

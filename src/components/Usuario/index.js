import React from "react";

const Usuario = (props) =>{
  const {username, name, profilePic} = props;
    return (
      <div class="usuario">
        <img src={profilePic} />
        <div class="texto">
          <strong>{username}</strong>
          {name}
        </div>
      </div>
    )
}

export default Usuario;
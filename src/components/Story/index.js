import React from "react";

const Story = (props) => {
  const {name, profilePic} = props;
  return (
    <div class="story">
      <div class="imagem">
        <img src={profilePic} />
      </div>
      <div class="usuario">
        {name}
      </div>
    </div>
  )}

export default Story;


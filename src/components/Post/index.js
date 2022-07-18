import React from "react";

const Post = (props) => {
  const {name, profilePic, content, likedBy, likes} = props;

  const [like, setLike] = React.useState("heart-outline");
    return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={profilePic} />
              {name}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            {content}
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
              <ion-icon 
              name={like}
              onClick={() => {
                if (like === "heart-outline") {
                  setLike("heart");
                } else {
                  setLike("heart-outline");
                }
              }}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={likedBy.profilePic} />
              <div class="texto">
              Curtido por <strong>{likedBy.name}</strong> e <strong>outras {likes} pessoas</strong>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Post;
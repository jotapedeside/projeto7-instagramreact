import ReactDOM  from "react-dom";
import Topbar from "./components/Topbar";
import Story from "./components/Story";
import Post from "./components/Post"
import Usuario from "./components/Usuario";
import Sugestao from "./components/Sugestao";
import Mobile from "./components/Mobile";
import {ImagesPosts, ImagesProfPics} from "./assets/img";

function App(){
  const posts = [{
    name: "meowed",
    profilePic: ImagesProfPics.Meowed,
    content: <img src={ImagesPosts.Cat}/>,
    likedBy: {name: "respondeai", profilePic:ImagesProfPics.RespondeAi},
    likes: "101.523"

  },{
    name: "barked",
    profilePic: ImagesProfPics.Barked,
    content: <img src={ImagesPosts.Dog}/>,
    likedBy: {name: "adorable_animals", profilePic:ImagesProfPics.AdorableAnimals},
    likes: "99.159"
  }];
  const stories = [{
    name: "9gag",
    profilePic: ImagesProfPics.NineGag
  },{
    name: "meowed",
    profilePic: ImagesProfPics.Meowed
  },{
    name: "barked",
    profilePic: ImagesProfPics.Barked
  },{
    name: "nathanwpylestrangeplanet",
    profilePic: ImagesProfPics.NathanWPyleStrangePlanet
  },{
    name: "wawawiwacomics",
    profilePic: ImagesProfPics.WawawiwaComics
  },{
    name: "respondeai",
    profilePic: ImagesProfPics.RespondeAi
  },{
    name: "filomoderna",
    profilePic: ImagesProfPics.FiloModerna
  },{
    name: "memeriagourmet",
    profilePic: ImagesProfPics.MemeriaGourmet
  },{
    name: "chibirdart",
    profilePic: ImagesProfPics.ChibirdArt
  }];
  const sugestoes = [{
    name: "bad.vibes.memes",
    profilePic: ImagesProfPics.BadVibesMemes,
    reason: "Segue você"
  },{
    name: "chibirdart",
    profilePic: ImagesProfPics.ChibirdArt,
    reason: "Segue você"
  },{
    name: "razoesparaacreditar",
    profilePic: ImagesProfPics.RazoesParaAcreditar,
    reason: "Novo no Instagram"
  },{
    name: "adorable_animals",
    profilePic: ImagesProfPics.AdorableAnimals,
    reason: "Segue você"
  },{
    name: "smallcutecats",
    profilePic: ImagesProfPics.SmallCuteCats,
    reason: "Segue você"
  }];
  const user = {username: "catanacomics", name: "Catana", profilePic: ImagesProfPics.CatanaComics};
    return(
      <div class="root">
        <Topbar></Topbar>
        
        <div class="corpo">
          <div class="esquerda">            
            <div class="stories">
              {stories.map(story => <Story
              name = {story.name}
              profilePic = {story.profilePic}
              />)}
              <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
              </div>
            </div>

            <div class="posts">
              {posts.map(post => <Post
              name = {post.name}
              profilePic = {post.profilePic}
              content = {post.content}
              likedBy = {post.likedBy}
              likes = {post.likes}
              />)}
            </div>
          </div>
          
          <div class="sidebar">
            <Usuario
            username = {user.username}
            name = {user.name}
            profilePic = {user.profilePic}/>

            <div class="sugestoes">
              <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
              </div>

              {sugestoes.map(sugestao => <Sugestao
              name = {sugestao.name}
              profilePic = {sugestao.profilePic}
              reason = {sugestao.reason}/>)}
            </div>

            <div class="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
            </div>
          </div>

        </div>
        <Mobile/>
      </div>
    )
}

ReactDOM.render(App(), document.querySelector('.root'));
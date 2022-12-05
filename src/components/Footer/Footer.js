import "./Footer.scss";
import { MusicControl } from "./MusicControl";
import { TrackInfo } from "./TrackInfo";
import Summer from "./TrackInfo/Summer.png"

export const Footer = (props) => {
  
  const likeData = (likeInfo) => {
    console.log(likeInfo);
  };

    return (
    <footer className="Footer">
      <div className="Footer__inner">
           <TrackInfo image={Summer} text={"Test Track"} name={"Medea"} likeData={likeData} />
           <MusicControl />
           <div {...props} className="Element3">Element3</div>
      </div>
    </footer>
  );
};

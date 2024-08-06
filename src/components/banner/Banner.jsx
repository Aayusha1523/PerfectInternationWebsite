import { useState } from "react";
import { Container } from "react-bootstrap";

import BannerVideo from "../../assets/Video/BannerVideo.mp4";
// import style from "../../style/home.module.css";
import style from "./banner.module.css";

const Banner = () => {
  const [loadingIframe, setLoadingIframe] = useState(true);
  return (
    <Container fluid className={style.Bannervideocontainer}>
      <video
        src={BannerVideo}
        autoPlay
        loop
        muted
        className={style.BannerVideo}
        onLoadedData={() => setLoadingIframe(false)}
      ></video>

      {loadingIframe ? <p>Loading Video...</p> : null}
    </Container>
  );
};

export default Banner;

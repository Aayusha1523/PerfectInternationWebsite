import { useState } from "react";
import { Container } from "react-bootstrap";

import style from "../../style/home.module.css";

const Banner = () => {
  const [loadingIframe, setLoadingIframe] = useState(true);
  return (
    <Container fluid className={style.Bannervideocontainer}>
      <video
        src="/Video/BannerVideo.mp4"
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

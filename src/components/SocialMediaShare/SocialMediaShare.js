import React from "react";
import styles from "./SocialMediaShare.module.css";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

function SocialMediaShare() {
  const shareUrl = "avinash-portfolio.vercel.app";
  return (
    <div className={styles.shareContainer}>
      <TwitterShareButton
        url={shareUrl}
        title={"Avinash Ganga's Web Developer Portfolio"}
        hashtags={["AvinashGanga", "TwistZA"]}
      >
        <TwitterIcon size={50} round={true} />
      </TwitterShareButton>

      <WhatsappShareButton
        url={shareUrl}
        title={"Avinash Ganga's Web Developer Portfolio: "}
      >
        <WhatsappIcon size={50} round={true} />
      </WhatsappShareButton>

      <FacebookShareButton
        url={shareUrl}
        quote={"Avinash Ganga's Web Developer Portfolio"}
      >
        <FacebookIcon size={50} round={true} />
      </FacebookShareButton>
      <EmailShareButton
        subject={"Avinash Ganga's Web Developer Portfolio"}
        body={"Check out this Avinash Ganga's Web Developer Portfolio! "}
        url={shareUrl}
      >
        <EmailIcon size={50} round={true} />
      </EmailShareButton>
    </div>
  );
}

export default SocialMediaShare;

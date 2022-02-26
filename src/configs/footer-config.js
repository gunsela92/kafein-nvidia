import FacebookIcon from "../assets/svg/icon-facebook.svg";
import TwitterIcon from "../assets/svg/icon-twitter.svg";
import YoutubeIcon from "../assets/svg/icon-youtube.svg";
import InstagramIcon from "../assets/svg/icon-instagram.svg";

const footerConfig = {
  footerLeft: [
    {
      id: 0,
      name: "Games",
    },
    {
      id: 1,
      name: "Membership",
    },
    {
      id: 2,
      name: "Download",
    }
  ],
  footerCenter: [
    {
      id: 0,
      name:"Contact Us",
    },
    {
      id: 1,
      name:"Blog",
    }
  ],
  footerRight: [
    {
      id: 0,
      name:"FAQs",
    },
    {
      id: 1,
      name:"Service Status",
    },
  ],
  socialMedia: [
    {
      id: 0,
      icon: FacebookIcon,
    },
    {
      id: 1,
      icon: TwitterIcon,
    },
    {
      id: 2,
      icon: InstagramIcon,
    },
    {
      id: 3,
      icon: YoutubeIcon,
    }
  ]
}

export default footerConfig;
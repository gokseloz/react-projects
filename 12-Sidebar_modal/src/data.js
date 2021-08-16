import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    text: "home",
    icon: <FaHome />,
    to: "/",
  },
  {
    id: 2,
    text: "team",
    icon: <FaUserFriends />,
    to: "/team",
  },
  {
    id: 3,
    text: "projects",
    icon: <FaFolderOpen />,
    to: "/projects",
  },
  {
    id: 4,
    text: "calendar",
    icon: <FaCalendarAlt />,
    to: "/calendar",
  },
  {
    id: 5,
    text: "documents",
    icon: <FaWpforms />,
    to: "/documents",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 5,
    url: "https://www.github.com",
    icon: <FaGithub />,
  },
];

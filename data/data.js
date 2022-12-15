import { Icon } from "@iconify/react";
import { client } from "../lib/supabase";

export const Links = [
  {
    link: "/explore",
    icon: <Icon icon="fa-solid:hashtag" />,
    label: "Explore",
  },
  {
    link: "/settings",
    icon: <Icon icon="ph:gear-fill" />,
    label: "Settings",
  },
];

export const authLinks = [
  {
    link: "",
    icon: <Icon icon="flat-color-icons:google" />,
    label: "Sign up with Google",
    onclick: async () => {
      const { data, error } = await client.auth.signInWithOAuth({
        provider: "google",
      });
      console.log(data, error);
    },
  },
  {
    link: "",
    icon: <Icon icon="logos:apple" />,
    label: "Sign up with Apple",
  },
  {
    link: "",
    label: "Sign up with phone or email",
  },
];

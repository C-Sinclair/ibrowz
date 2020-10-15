import React from "react";
import { Music } from ".";
import { Meta } from "@storybook/react/types-6-0";

export const Primary: React.FC<{}> = () => (
  <Music />
);

export const ManyBars: React.FC<{}> = () => (
  <Music bars={20} />
);

export const Tall: React.FC<{}> = () => (
  <Music bars={10} height={40} />
);

export default {
  title: "Music",
  component: Music,
} as Meta;
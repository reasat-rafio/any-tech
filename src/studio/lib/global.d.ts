import { IconType } from "react-icons/lib";

declare global {
  interface IPortableText {
    _key: string;
    _type: string;
    children: Child[];
    markDefs: any[];
    style: string;
  }

  interface ITextContent {
    title: string;
    description: PortableText[];
  }
  interface IPrepare {
    title?: string;
    subtitle?: string;
    media?: string | IconType;
  }
}

declare var createTemplate: Function

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

import { AuthCredentials } from "@hapi/hapi";
import { IProfile } from "../server/Database/Interfaces/EntityProfile";

declare module "@hapi/hapi" {
  interface AuthCredentials {
    profile: IProfile
  }
}
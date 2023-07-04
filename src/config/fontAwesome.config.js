import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faVolumeMute,
  faVolumeDown,
  faVolumeHigh,
  faVolumeXmark,
  faVolumeOff,
  faDownload,
  faCamera,
  faVideo,
  faVideoCamera,
  faMicrophone,
  faMicrophoneSlash,
  faTriangleExclamation,
  faCloudArrowUp,
  faSpinner,
  faHelmetSafety,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePlay,
  faCircleStop,
  faCirclePause,
  faCircleXmark,
  faCircleDot,
  faCircleDown,
  faTrashCan,
  faFloppyDisk,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from "@fortawesome/vue-fontawesome";

library.add(
  faVolumeMute,
  faVolumeDown,
  faVolumeHigh,
  faVolumeXmark,
  faVolumeOff,
  faDownload,
  faCamera,
  faVideo,
  faVideoCamera,
  faMicrophone,
  faMicrophoneSlash,
  faTriangleExclamation,
  faCirclePlay,
  faCircleStop,
  faCirclePause,
  faCircleXmark,
  faCircleDot,
  faCircleDown,
  faTrashCan,
  faFloppyDisk,
  faEyeSlash,
  faCloudArrowUp,
  faSpinner,
  faHelmetSafety,
  faVectorSquare
);

export default function (app) {
  app.component("fa-icon", FontAwesomeIcon);
  app.component("fa-layers", FontAwesomeLayers);
}

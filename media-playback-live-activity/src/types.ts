interface Message {
  type: string;
  data?: any;
}

interface MediaActivity {
  title?: string | null;
  artist?: string | null;
  appName?: string | null;
  appIcon?: string | null;
  album?: string | null;
  albumCover?: string | null;
  duration?: number | null;
  elapsed?: number | null;
}

type Send = (mesg: Message) => void;
type Subscribe = (callback: (mesg: Message) => void) => void;

export type { MediaActivity, Message, Send, Subscribe };

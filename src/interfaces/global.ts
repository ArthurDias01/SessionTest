
export interface IAnalyticsEvents {
  events: IEvent[]
}

export interface IEvent {
  url: string,
  visitorId: string,
  timestamp: number,
}

export interface Session {
  duration: number;
  pages: string[];
  startTime: number;
}

export interface SessionsByUser {
  [visitorId: string]: Session[];
}

export interface InputData {
  events: IEvent[];
}

export interface OutputData {
  sessionsByUser: SessionsByUser;
}

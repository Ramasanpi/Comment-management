export type Platform = 'all' | 'twitter' | 'instagram' | 'facebook';
export type Sentiment = 'positive' | 'negative' | 'neutral';

export interface Comment {
  id: string;
  platform: Exclude<Platform, 'all'>;
  author: string;
  content: string;
  sentiment: Sentiment;
  timestamp: string;
  avatar: string;
}
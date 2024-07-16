type position = 'mentor' | 'mentee';

export interface ReviewCardProps {
  name: string;
  content: string;
  belong: string;
  position: position;
}

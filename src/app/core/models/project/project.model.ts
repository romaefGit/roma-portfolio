export type contentType = 'game' | 'art' | 'artSlides';

// Slide interface for individual slide images
export interface Slide {
  img: string;
  title: string;
  description: string;
}

// ModalInfo interface for the modal details
interface ModalInfo {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  slides: Slide[];
  social?: string[]; // Optional social media links if needed in the future
}

// Main Item interface for the top-level structure
export interface Project {
  name: string;
  type: string;
  contentType: contentType;
  gif?: string;
  img: string;
  toShow: string;
  description: string;
  modal_info: ModalInfo;
}

import { IconType } from "react-icons/lib";

export type SiteMetaData = {
  metadata: {
    title: string;
    text: string;
    url: string;
  };
};

export interface FAQ {
  faq: {
    heading: {
      title: string;
      subTitle: string;
    };
    questions: {
      id: string;
      question: string;
      answer: string;
    }[];
  };
}

export interface SectionHeading {
  heading: {
    title: string;
    subTitle: string;
  };
}

export interface SiteFooterProps {
  lang?: string;
  dictionary: {
    ctaText: string;
    mapHeading: string;
  };
}

export interface SiteNavigationTypes {
  navigation: {
    home: string;
    rooms: string;
    signIn: string;
    signUp: string;
    signOut: string;
  };
  themeMenu: {
    light: string;
    dark: string;
    system: string;
  };
  footer: {
    ctaText: string;
    mapHeading: string;
  };
}

export interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

interface RoomCategory {
  btnText: string;
  title: string;
  description: string;
  slug: string;
}

export interface CategoriesProps {
  heading: {
    title: string;
    subTitle: string;
  };
  rooms: {
    basics: RoomCategory;
    doubles: RoomCategory;
    standards: RoomCategory;
    double_beds: RoomCategory;
    family: RoomCategory;
    executives: RoomCategory;
  };
}

export interface CategoryCardProps {
  btnText: string;
  title: string;
  description: string;
  slug: string;
  Icon: IconType;
}

export interface RoomCategory {
  btnText: string;
  title: string;
  description: string;
  slug: string;
}

export interface DiscountCardProps {
  lang: string;
  dictionary: {
    heading: { title: string; subTitle: string };
    cards: {
      card_left: {
        title: string;
        description: string;
      };
      card_right: {
        title: string;
        description: string;
      };
    };
    cta: {
      ctaText: string;
      buttonTxt: string;
    };
  };
}

export interface CopyWrittingProps {
  header: {
    review: string;
    highlight: string;
    title: string;
    complementaryText: string;
    cta: string;
  };
}

export interface SurroundingProps {
  heading: { title: string; subTitle: string };
  cta: { buttonTxt: string };
}

export interface TestimonialsProps {
  lang: string;
  dictionary: { heading: { title: string; subTitle: string } };
}

export interface HeadingProps {
  title: string;
  subTitle: string;
  classNames?: string;
}

export interface CarouselProps {
  arr: string[] | CardTestimonialProps[];
  delay: number;
  direction: "horizontal" | "vertical";
  className?: string;
  spaceBetween?: number;
  speed?: number;
  component?: "cardTestimonial" | "img";
  classNames?: string;
  slidesPerView?: number | "auto";
}

export interface CardTestimonialProps {
  avatar: string;
  author: string;
  rating: number;
  comment: string;
  roomRating: number;
  locationRating: number;
  ServiceRating: number;
}

export interface TextHighlightProps {
  elId: string;
  text: string;
  highlightType: RoughAnnotationType;
  color: string;
  delay?: number;
  className?: string;
}

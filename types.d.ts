import { IconType } from "react-icons/lib";

export type SiteMetaData = {
  className?: string;
  metadata: {
    title: string;
    text: string;
    url: string;
  };
};

export interface ShareMetadata {
  title: string;
  text: string;
  url: string;
}

export interface HomeHeaderPropTypes {
  header: {
    review: string;
    higlight: string;
    title: string;
    complementaryText: string;
    cta: string;
  };
}

export interface FAQ {
  dictionary: {
    heading: {
      title: string;
      subtitle: string;
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
    subtitle: string;
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
    subtitle: string;
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
  heading: {
    title: string;
    subtitle: string;
  };
  cards: {
    first_discount: {
      title: string;
      description: string;
    };
    second_discount: {
      title: string;
      description: string;
    };
  };
  cta: {
    text: string;
    button: string;
  };
}

export interface TrendingProps {
  dictionary: {
    heading: { title: string; subtitle: string };
  };
}

export interface CopyWrittingProps {
  review: string;
  highlight: string;
  title: string;
  complementaryText: string;
  cta: string;
}

export interface SurroundingProps {
  dictionary: {
    heading: { title: string; subtitle: string };
    cards: {
      first_card: {
        title: string;
        description: string;
      };
      second_card: {
        title: string;
        description: string;
      };
    };
    cta: { button: string };
  };
}

export interface TestimonialsProps {
  dictionary: {
    title: string;
    subtitle: string;
  };
}

export interface HeadingProps {
  title: string;
  subtitle: string;
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

export interface SectionPropTpes {
  children: React.ReactNode;
  sectionClassName?: string;
  wrapperClassName?: string;
}

export type SiteMetaData = {
  metadata: {
    title: string;
    text: string;
    url: string;
  };
};

interface FAQ {
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

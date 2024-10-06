import ReactHtmlParser from "react-html-parser";

export const useHtmlParser = (htmlString: string) => {
  return ReactHtmlParser(htmlString);
};

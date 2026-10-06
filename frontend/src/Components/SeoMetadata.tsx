import { useEffect } from "react";
import { useLocation } from "react-router";
import { seoHead } from "../seo";

export default function SeoMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const documentWithMetadata = new DOMParser().parseFromString(
      seoHead(pathname),
      "text/html",
    );
    document.head
      .querySelectorAll("[data-seo]")
      .forEach((element) => element.remove());
    for (const element of Array.from(documentWithMetadata.head.children)) {
      document.head.appendChild(document.importNode(element, true));
    }
  }, [pathname]);

  return null;
}

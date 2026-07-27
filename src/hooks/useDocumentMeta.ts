import { useEffect } from "react";

type MetaInput = {
  title: string;
  description?: string;
};

export function useDocumentMeta({ title, description }: MetaInput) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    if (description) {
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
    return () => {
      document.title = prev;
      if (meta && description) meta.setAttribute("content", prevDesc);
    };
  }, [title, description]);
}

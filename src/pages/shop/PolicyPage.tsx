import { Link, useLocation } from "react-router-dom";
import { shopConfig } from "../../data/shop/shopConfig";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

const policies: Record<string, { title: string; body: string[] }> = {
  shipping: {
    title: "Shipping Policy",
    body: [
      "REQUIRES FINAL REVIEW before launch.",
      shopConfig.shippingBlurb,
      "International duties/taxes may apply depending on destination and checkout provider.",
    ],
  },
  returns: {
    title: "Return Policy",
    body: [
      "REQUIRES FINAL REVIEW before launch.",
      shopConfig.returnsBlurb,
      "Do not dispose of defective items before documentation is requested.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    body: [
      "REQUIRES FINAL REVIEW before launch.",
      "NRE Apparel may collect contact details for orders, support, and optional marketing.",
      "Payment processing will be handled by the selected checkout provider (e.g. Shopify). Do not store card data on this site.",
    ],
  },
  terms: {
    title: "Terms and Conditions",
    body: [
      "REQUIRES FINAL REVIEW before launch.",
      "Products may be produced after purchase. Colors/prints can vary slightly between blanks and production runs.",
      "Site content and NRE marks are owned by NuRock Entertainment unless otherwise noted.",
    ],
  },
  faq: {
    title: "FAQ",
    body: [
      "How is sizing? Oversized unisex for most tops — size down for a closer fit. Confirm final Tapstitch blank measurements before launch.",
      "When does production start? Typically after order placement (POD).",
      "Is checkout live? Not yet — cart works locally; Shopify/Tapstitch connect next.",
      "Questions? Email Hollynurock@nurockentertainment.com.",
    ],
  },
};

export function PolicyPage() {
  const { pathname } = useLocation();
  const key = pathname.split("/").pop() || "faq";
  const page = policies[key] ?? policies.faq;
  useDocumentMeta({ title: `${page.title} — NRE Apparel`, description: page.body[0] });

  return (
    <div className="nre-shop min-h-screen bg-[#080706] px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-primary">
          <Link to="/shop" className="hover:underline">Shop</Link> / Policy
        </p>
        <h1 className="mt-4 text-4xl font-black uppercase md:text-5xl">{page.title}</h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-white/70">
          {page.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

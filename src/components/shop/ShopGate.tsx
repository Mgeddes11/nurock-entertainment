import { useEffect, useState, type ReactNode } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import {
  canAccessShop,
  tryGrantPreviewFromToken,
} from "../../commerce/shopAccess";

/**
 * Blocks /shop/* while publicEnabled is false.
 * Team preview: visit any shop URL with ?preview=<previewToken> once per session.
 */
export function ShopGate({ children }: { children: ReactNode }) {
  const [searchParams] = useSearchParams();
  const [allowed, setAllowed] = useState(() => canAccessShop());

  useEffect(() => {
    if (tryGrantPreviewFromToken(searchParams.get("preview"))) {
      setAllowed(true);
    } else {
      setAllowed(canAccessShop());
    }
  }, [searchParams]);

  if (!allowed) {
    return <Navigate to="/" replace />;
  }

  return children;
}

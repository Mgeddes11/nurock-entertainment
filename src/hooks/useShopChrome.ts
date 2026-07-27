import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  canAccessShop,
  tryGrantPreviewFromToken,
} from "../commerce/shopAccess";

/** Whether shop should appear in nav/footer/cart chrome for this session. */
export function useShopChrome(): boolean {
  const [searchParams] = useSearchParams();
  const [visible, setVisible] = useState(() => canAccessShop());

  useEffect(() => {
    if (tryGrantPreviewFromToken(searchParams.get("preview"))) {
      setVisible(true);
      return;
    }
    setVisible(canAccessShop());
  }, [searchParams]);

  return visible;
}

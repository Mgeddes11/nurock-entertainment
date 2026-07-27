import { shopConfig } from "../data/shop/shopConfig";

const STORAGE_KEY = "nre_shop_preview";

export function isShopPublic(): boolean {
  return shopConfig.publicEnabled;
}

export function hasShopPreviewAccess(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function grantShopPreviewAccess(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function canAccessShop(): boolean {
  return isShopPublic() || hasShopPreviewAccess();
}

export function tryGrantPreviewFromToken(token: string | null): boolean {
  if (!token) return false;
  if (token !== shopConfig.previewToken) return false;
  grantShopPreviewAccess();
  return true;
}

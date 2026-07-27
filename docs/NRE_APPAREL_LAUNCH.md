# NRE Apparel — Launch Notes

## Commands
```bash
npm run dev
npm run build
npm run preview
```

## Budget assumptions (internal)
- Tapstitch account: $0
- Domain: ~$20/year
- Shopify: ~$39/month (confirm current plan)
- Samples: ~$300–$600
- Packaging: ~$150–$300
- Photography: ~$0–$500
- Initial marketing: ~$300–$1,000
- Practical launch range: ~$800–$2,500

## Connection points
- Products: `src/data/shop/products.ts`
- Config/copy: `src/data/shop/shopConfig.ts`
- Cart: `src/commerce/cartContext.tsx`
- Providers: `src/commerce/providers/*`
- Env: `VITE_COMMERCE_PROVIDER`, future Shopify Storefront vars

## Pre-launch checklist
1. Replace placeholder product imagery with campaign assets
2. Confirm Tapstitch blank specs + size charts
3. Map Tapstitch product/variant IDs
4. Connect Shopify Storefront checkout
5. Legal review of shipping/returns/privacy/terms
6. Activate packaging QR unlock content
7. Test mobile cart + ATC on iPhone
8. Confirm newsletter delivery to NuRock email

output "website_bucket_id" {
  description = "S3 bucket name for the static website."
  value       = module.static_site.website_bucket_id
}

output "cloudfront_website_id" {
  description = "CloudFront distribution ID for cache invalidation."
  value       = module.static_site.cloudfront_website_id
}

output "cloudfront_website_domain_name" {
  description = "CloudFront domain name for DNS CNAME setup."
  value       = module.static_site.cloudfront_website_domain_name
}

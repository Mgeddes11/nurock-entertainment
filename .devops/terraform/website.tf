module "static_site" {
  source      = "cn-terraform/s3-static-website/aws"
  version     = "1.0.9"
  name_prefix = "${local.project}-website"

  providers = {
    aws.main         = aws.us-east-1
    aws.acm_provider = aws.acm_provider
  }

  website_domain_name = local.environments[local.environment].domain

  aws_accounts_with_read_view_log_bucket = [local.aws_account]

  create_route53_hosted_zone = false
  route53_hosted_zone_id     = aws_route53_zone.root.zone_id

  create_acm_certificate = true

  cloudfront_custom_error_responses = [
    {
      error_code            = 404
      response_code         = 200
      response_page_path    = "/index.html"
      error_caching_min_ttl = 0
    },
    {
      error_code            = 403
      response_code         = 200
      response_page_path    = "/index.html"
      error_caching_min_ttl = 0
    }
  ]

  website_server_side_encryption_configuration = {
    rule = {
      apply_server_side_encryption_by_default = {
        sse_algorithm = "AES256"
      }
    }
  }

  log_bucket_force_destroy = true
}

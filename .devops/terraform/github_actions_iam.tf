resource "aws_iam_user" "github_actions_deployer" {
  name = "${local.project}-github-actions-${local.environment}"
  path = "/service-users/"

  tags = merge(local.tags, {
    Name = "${local.project}-github-actions-${local.environment}"
  })
}

resource "aws_iam_user_policy" "github_actions_deployer" {
  name = "${local.project}-website-deploy-${local.environment}"
  user = aws_iam_user.github_actions_deployer.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "ListWebsiteBucket"
        Effect = "Allow"
        Action = [
          "s3:GetBucketLocation",
          "s3:ListBucket",
          "s3:ListBucketMultipartUploads"
        ]
        Resource = module.static_site.website_bucket_arn
      },
      {
        Sid    = "ManageWebsiteObjects"
        Effect = "Allow"
        Action = [
          "s3:AbortMultipartUpload",
          "s3:DeleteObject",
          "s3:GetObject",
          "s3:ListMultipartUploadParts",
          "s3:PutObject"
        ]
        Resource = "${module.static_site.website_bucket_arn}/*"
      },
      {
        Sid    = "InvalidateWebsiteCache"
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation"
        ]
        Resource = module.static_site.cloudfront_website_arn
      }
    ]
  })
}

resource "aws_iam_access_key" "github_actions_deployer" {
  user = aws_iam_user.github_actions_deployer.name
}

output "github_actions_iam_user_name" {
  description = "IAM username for GitHub Actions website deploys."
  value       = aws_iam_user.github_actions_deployer.name
}

output "github_actions_aws_access_key_id" {
  description = "Access key ID for the GitHub Actions deploy user."
  value       = aws_iam_access_key.github_actions_deployer.id
}

output "github_actions_aws_secret_access_key" {
  description = "Secret access key for the GitHub Actions deploy user. This value is stored in Terraform state."
  value       = aws_iam_access_key.github_actions_deployer.secret
  sensitive   = true
}

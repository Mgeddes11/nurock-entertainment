provider "aws" {
  region = local.region
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}

provider "aws" {
  alias  = "acm_provider"
  region = "us-east-1"
}

data "aws_caller_identity" "current" {}

data "aws_route53_zone" "root" {
  provider     = aws.us-east-1
  name         = local.root_domain
  private_zone = false
}

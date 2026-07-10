locals {
  workspace   = terraform.workspace
  environment = regex("^(.*?)-", local.workspace)[0]
  region      = regex("-(us-[a-z]+-[0-9]+)$", local.workspace)[0]
  project     = "nurock-entertainment"
  aws_account = data.aws_caller_identity.current.account_id

  environments = {
    production = {
      name   = "Production"
      domain = "nurockentertainment.com"
    }
    development = {
      name   = "Development"
      domain = "dev.nurockentertainment.com"
    }
  }

  root_domain = "nurockentertainment.com"

  env_prefix = local.environment == "production" ? "" : "${local.environment}."

  tags = {
    Name        = local.project
    Environment = local.environment
    Provisioner = "Terraform"
    Vertical    = "Frontend"
  }
}

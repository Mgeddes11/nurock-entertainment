terraform {
  required_version = "~> 1.9.8"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Configure the backend after we create/select the NuRock state bucket.
  # Example shape (do not enable until bucket/table exist):
  # backend "s3" {
  #   bucket         = "<terraform-state-bucket>"
  #   key            = "backend/nurock-entertainment/terraform.tfstate"
  #   region         = "us-east-1"
  #   dynamodb_table = "<terraform-lock-table>"
  #   encrypt        = true
  # }
}

#!/bin/bash
docker buildx build --platform linux/amd64 -t 853145313965.dkr.ecr.eu-central-1.amazonaws.com/dairyrun-portal:prod .
docker login -u AWS --password $(aws ecr get-login-password --region eu-central-1) 853145313965.dkr.ecr.eu-central-1.amazonaws.com
docker push 853145313965.dkr.ecr.eu-central-1.amazonaws.com/dairyrun-portal:prod
IMAGES_TO_DELETE=$(aws ecr list-images --region eu-central-1 --repository-name dairyrun-portal --filter "tagStatus=UNTAGGED" --query 'imageIds[*]' --output json)
aws ecr batch-delete-image --region eu-central-1 --repository-name dairyrun-portal --image-ids "$IMAGES_TO_DELETE" || true
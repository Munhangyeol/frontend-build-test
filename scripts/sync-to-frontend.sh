# scripts/sync-to-frontend.sh
set -e

rm -rf ../package/frontend/node_modules/@vendor || true
mkdir -p ../package/frontend/node_modules/@vendor

cp -r ../packages/quasar/dist ../packages/frontend/node_modules/@vendor/quasar
cp -r ../packages/datatable/dist ../packages/frontend/node_modules/@vendor/datatable
  
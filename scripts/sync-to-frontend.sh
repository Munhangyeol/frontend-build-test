# scripts/sync-to-frontend.sh
set -e

rm -rf ../package/frontend/node_modules/@vendor || true
mkdir -p ../package/frontend/node_modules/@vendor

cp -r ../package/quasar/dist ../package/frontend/node_modules/@vendor/quasar
cp -r ../package/datatable/dist ../package/frontend/node_modules/@vendor/datatable

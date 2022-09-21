# call inside of the content dir after building with eleventy    e.g.,
# cd content/
# npm build
# ../tools/deploy.sh
echo "Copying _site to /var/www/internetonmars_org/"
rm -rf /var/www/internetonmars_org/*
cp -R _site/* /var/www/internetonmars_org
# call inside of the content dir after building with eleventy    e.g.,
# cd content/
# npm build
# ../tools/deploy.sh
# OR ../tools/deploy.sh --production

if [ "$1" == "--production" ]; then
    echo "PRODUCTION: Copying _site to /var/www/internetonmars_org/"
    rm -rf /var/www/internetonmars_org/*
    cp -R _site/* /var/www/internetonmars_org
else
    echo "STAGING: Copying _site to /var/www/internetonmars_org/staging/"
    rm -rf /var/www/internetonmars_org/staging/*
    mkdir -p /var/www/internetonmars_org/staging
    cp -R _site/* /var/www/internetonmars_org/staging
fi
---
title: "Setting up DNS and an Apache origin server for Akamai"
layout: layouts/base.njk
tags: drafts
---

- https://community.akamai.com/customers/s/article/How-to-test-using-Akamai-s-Staging-Network-1386937927433
    -> changing /etc/hosts to IPv4 address doesn't (always) work if you have ipv6 enabled... 
    -> Seems like browsers skip /etc/hosts and use the AAAA DNS record instead if available
        -> curl tries /etc/hosts first, if fails to connect (e.g., for testing   127.0.0.1 www.example.com), falls back to IPv6 record

    -> remember to dig   www.example.com.edgesuite-staging.net   and NOTHING ELSE! 

- Apache config redirect only has to be done for https://example.com, NOT for akamai-origin.example.com
    -> for some reason, if you don't have a specific alias/virtualhost for akamai-origin.example.com, it will default to using the example.com vhost
    -> if you then just do Redirect 301 / https://www.example.com, then you get an infinite redirection loop (which... is logical. It's not logical that the akamai-origin.example.com domain is redirected...)

- check if you're correctly on staging by watching the response header    x-akamai-staging: EdgeSuite

- sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
    to flush DNS on OS X Monterey 
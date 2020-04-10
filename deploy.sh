#!/bin/bash
git config user.name "Siddharth Venu"
git config user.email "siddharthvvenu@gmail.com"
gatsby build --prefix-paths
gh-pages -d public -r "https://$GH_TOKEN@github.com/show-off/classic.git"

#!/bin/sh

cat ~/Dropbox/germanikus/deutsch.md ~/Dropbox/germanikus/deutsch2.md | grep ' = ' | perl doit.pl > ../js/res.js

cp ~/Dropbox/germanikus/de.html ../

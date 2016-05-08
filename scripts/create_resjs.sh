#!/bin/sh

cat ~/Dropbox/germanikus/deutsch.md ~/Dropbox/germanikus/deutsch2.md | grep ' = ' | perl doit.pl > ../js/res.js

# cat ~/Dropbox/germanikus/deutsch.md ~/Dropbox/germanikus/deutsch2.md | grep -E ' = |#' | awk -F '=' '{print $2,"\t\t",$1}'

cp ~/Dropbox/germanikus/de.html ../

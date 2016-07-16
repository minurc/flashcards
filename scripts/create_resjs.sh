#!/bin/sh

cat ../src-de/deutsch.md |  perl gen_js_struct.pl > ../js/res.js
# cat ../src-de/deutsch.md | grep ' = ' | perl gen_js_struct.pl > ../js/res.js

# cat ../src-de/deutsch.md | grep -E ' = |#' | awk -F '=' '{print $2,"\t\t",$1}'


#!/bin/sh

cat ../src-de/uv.txt |  perl gen_uv_struct.pl > ../js/uv.js
# cat ../src-de/deutsch.md | grep ' = ' | perl gen_js_struct.pl > ../js/res.js

# cat ../src-de/deutsch.md | grep -E ' = |#' | awk -F '=' '{print $2,"\t\t",$1}'


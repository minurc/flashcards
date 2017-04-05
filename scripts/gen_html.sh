#!/bin/sh

FILE="../de.html"


cat > $FILE <<__EOF__
<html>
    <head>
        <meta charset="utf-8">
        <title>Deutsch</title>
    </head>

    <body>

    <pre>
__EOF__

cat ../src-de/deutsch.md >> $FILE
cat ../src-de/deutsch2.md >> $FILE
cat ../src-de/deutsch-at.md >> $FILE

cat >> $FILE <<__EOF__
    </pre>
    </body>
</html>
__EOF__

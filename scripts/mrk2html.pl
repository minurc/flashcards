#!/usr/bin/env perl
#



while (<STDIN>) {

    # image support
    if (m/\[!([^\]]+)\]\(([^\)]+)\)/) {
        print "<img src=\"$2\"/>";
    }


    else {
        print $_;
    }

}

#!/usr/bin/env perl
#



print "const words = { \n";
while (<STDIN>) {

    my ($d, $s) = m/^(.*)\s*=\s*(.*)$/g;

#     print $d if $d =~ /=/;
#     print $s if $s =~ /=/;
     print "'$d' : '$s', \n";

}
print "}; \n";

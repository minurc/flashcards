#!/usr/bin/env perl
#



print "const words = { \n";
# print "\t'uv' : {\n";

$section = 0;
while (<STDIN>) {

    my ($inf, $p3, $pr, $pz) = m/^(.*)\t(.*)\t(.*)\t(.*)$/g;

    #     print $d if $d =~ /=/;
    #     print $s if $s =~ /=/;
    print "\t\t'$inf' : '$p3 / $pr / $pz', \n";

}

# print "\t},\n";
print "}; \n";

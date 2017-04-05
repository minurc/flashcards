#!/usr/bin/env perl
#



print "const words = { \n";
$section = 0;
my ($d, $s, $zb, $zbt) = 0;
while (<STDIN>) {

    if ($zb) {
        if (m/^\t/) {
            ($zbt) = m/^\t+(.*)$/g;
        }
        print "\t\t'$d' : '$s|$zbt', \n";
        $zb = 0;
        $d = $s = $zbt = '';
    }

    if (/ = / && $section) {
        ($d, $s) = m/^(.*)\s*=\s*(.*)$/g;
        $zb = 1;
    #     print $d if $d =~ /=/;
    #     print $s if $s =~ /=/;
    } elsif (/^\s*#\s*([0-9]{2}\.[0-9]{2}\.[0-9]{4})/) {
        if ($section) {
            print "\t},\n";
        }
        $section = $1;
        print "\t'$section' : {\n";
    }

}
if ($section) {
    print "\t},\n";
}
print "}; \n";

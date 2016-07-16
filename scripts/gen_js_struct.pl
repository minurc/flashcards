#!/usr/bin/env perl
#



print "const words = { \n";
$section = 0;
while (<STDIN>) {

    if (/ = / && $section) {
        my ($d, $s) = m/^(.*)\s*=\s*(.*)$/g;

    #     print $d if $d =~ /=/;
    #     print $s if $s =~ /=/;
         print "\t\t'$d' : '$s', \n";
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

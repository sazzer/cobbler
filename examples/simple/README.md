# Example application - Simple

This is an example application with a single source file, no tests, and no dependencies.

The output of this should be a single executable.

Roughly speaking, the build steps should be

* Create the directory target/objects
* g++ --std=c++11 -Isrc/main/h -Isrc/main/c++ src/main/c++/main.cpp -c -o target/main/c++/objects/main.o
* g++ target/main/c++/objects/main.o -o target/simple

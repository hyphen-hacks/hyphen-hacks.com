#!/bin/bash

concurrently -k -n "webpack,hugo" -c "yellow.bold,cyan.bold" "(cd assets; npx webpack --watch --progress)" "hugo server --appendPort=false -b / --bind 0.0.0.0 -D --disableFastRender"

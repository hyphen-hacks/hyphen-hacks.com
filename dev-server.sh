#!/bin/bash

(cd assets; npx webpack --watch --progress) &
hugo server --appendPort=false -b / --bind 0.0.0.0 -D --disableFastRender

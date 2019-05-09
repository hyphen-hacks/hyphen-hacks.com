#!/bin/bash

(cd assets; npx webpack --watch --progress) &
hugo server -D

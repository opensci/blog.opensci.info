#!/bin/bash
sudo docker run --rm -v "$PWD:/src" -p 4000:4000 grahamc/jekyll serve -w

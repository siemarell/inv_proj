#!/bin/bash
DIR=/home/visiology/inv_proj

export LANG=en_US.UTF-8
cd $DIR
screen -AmdS inv_proj sudo -u visiology node bin/www


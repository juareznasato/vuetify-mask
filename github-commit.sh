#!/bin/bash
#
######################################################################
#    FUNÇÃO SCRIPT.: EXECUTAR ADD, COMMIT E PUSH NO GITHUB           # 
#------------------------------------------------------------------- #
#                                                                    #
#       DESENVOLVIMENTO.: JUAREZ NASATO                              #
#       EMAIL.: JUAREZNASATO@GMAIL.COM                               #
#       DATA CRIACAO.: 03/02/2020                                    #
#       VERSAO.: 0.0.1                                               #
#                                                                    #
######################################################################
#
# --> COMANDOS <--
# $ sh github-commit.sh "mensagem commit"
# ou 
# $ sh github-commit.sh 'mensagem commit'
#
echo "\033[1;36m   ##### # ###### #    # #    # #####  \033[0m";
echo "\033[1;36m  #      #   #    #    # #    # #    # \033[0m";
echo "\033[1;36m  #      #   #    #    # #    # #    # \033[0m";
echo "\033[1;36m  # #### #   #    ###### #    # #####  \033[0m";
echo "\033[1;36m  #    # #   #    #    # #    # #    # \033[0m";
echo "\033[1;36m  #    # #   #    #    # #    # #    # \033[0m";
echo "\033[1;36m   ####  #   #    #    #  ####  #####  \033[0m";
echo
echo "Inicializando git...";
git add .
git commit -m "$1";
echo "$1"
echo "Git finalizado: add, commit.";


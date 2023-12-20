#!/bin/env bash
# compiles styles based on style name (input)

args=()
styles=(terminal document)
sheets=(style animations)
STYLES_DIR=./root/styles/
TYPES=("scss" "css")
compile_in=".scss"
compile_out=".css"

#read -i "Enter Style Type:" input
function compile(){
	msg=""
	success=0
	input=$1
	
	# if [[ $success = 0 ]]
	# then
		# echo "$1 not an existing style"
	# else
		# echo "Successfully compiled $1 stylesheets!"
	# fi
}
function check_style(style_type){
match=0
for s in "${styles[@]}";	
do 
	if [[ $style_type = $s ]];
	then
		echo "Match"
		return 1
	fi
done

return 0
}
#if $input
echo "$1"
exists=check_style($1)
echo $exists
#compile

#case input in

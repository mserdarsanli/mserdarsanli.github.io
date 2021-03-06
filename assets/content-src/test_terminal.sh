function set_fg {
	printf "\033[38;5;${1}m"
}

function set_bg {
	printf "\033[48;5;${1}m"
}

for ROW_START in $(seq 165 6 195; seq 231 -6 201)
do
	BLOCK_STARTS=(
	  $ROW_START
	  $(($ROW_START - 77))
	  $(($ROW_START - 144))
	)
	BLOCK_ENDS=(
	  $((${BLOCK_STARTS[0]} - 5))
	  $((${BLOCK_STARTS[1]} + 5))
	  $((${BLOCK_STARTS[2]} - 5))
	)
	SEQD=(-1 1 -1)

	for BLOCK in $(seq 0 2)
	do
		for i in $(seq ${BLOCK_STARTS[$BLOCK]} ${SEQD[$BLOCK]} ${BLOCK_ENDS[$BLOCK]})
		do
			set_bg $i
			printf "%4d " $i
		done

		printf "\033[0m "
	done
	printf "\033[0m\n"
done

# Reset colors
printf "\033[0m"

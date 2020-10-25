import React, {useState, useEffect, useRef} from 'react';

export default function Hamsterwheel(props) {
	const [height, setHeight] = useState(0);
	const elementRef = useRef(null);

	useEffect(() => {
		setHeight(elementRef.current.clientHeight);

		if ( scrollbar === false ) {
			const $style = document.createElement("style");
			document.head.appendChild($style);
			$style.innerHTML = `::-webkit-scrollbar{display:none;}`;
		}
	});

	const {
		autoscroll = true,
	    infinite = true,
	    scrollSpeed = 40,
	    scrollDelta = 15,
		clones = 6,
		content = '',
		scrollbar = false,
	} = props;

	return (
		<div ref={elementRef}>
			{ [...Array(clones)].map((e, i) => <div key={i}>{ content }</div>) }
		</div>
	)
}

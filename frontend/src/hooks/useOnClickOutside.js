import { useEffect } from "react";

export function useOnClickOutside({ btnRef, menuRef }, handler) {
	useEffect(() => {
		const listener = (event) => {
			if (!btnRef.current || btnRef.current.contains(event.target)) {
				return;
			}
			if (!menuRef.current || menuRef.current.contains(event.target)) {
				return;
			}
			handler();
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [btnRef, menuRef, handler]);
}

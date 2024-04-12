import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useMouseDownOutside = (ref, callback) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                dispatch(callback());
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [dispatch]);
    return ref;
}

export default useMouseDownOutside;
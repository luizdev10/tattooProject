import { useEffect, useLayoutEffect, useRef, useState } from "react";

const semPreferenciaDeMovimento = () =>
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useRevelar({ threshold = 0.15 } = {}) {
    const ref = useRef(null);
    const [oculto, setOculto] = useState(false);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") return;
        if (!semPreferenciaDeMovimento()) return;

        const rect = el.getBoundingClientRect();
        const jaVisivel = rect.top < window.innerHeight && rect.bottom > 0;
        if (jaVisivel) return;

        setOculto(true);
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el || !oculto) return;
        if (typeof IntersectionObserver === "undefined") return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setOculto(false);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [oculto, threshold]);

    return { ref, oculto };
}
